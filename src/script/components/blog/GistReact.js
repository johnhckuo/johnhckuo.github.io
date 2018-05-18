import React from "react"
import * as Style from "./style"
import axios from "axios"
import showdown from "showdown"
import { Redirect, Link } from 'react-router-dom'
import { HR } from "../global/style"

export default class GistReact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username : null,
			gistList: [],
			publicOnly: false,
			isReading: false,
			isLoading: "true",
			blogContent: null,
			blogId: null,
			redirect: false
		}
		this.root = "https://api.github.com";
		this.fetchGistList = this.fetchGistList.bind(this);
		this.UTCtoLocaleTime = this.UTCtoLocaleTime.bind(this);
		this.fetchGist = this.fetchGist.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if (prevState.isReading){
			return {isReading: false, blogId: null, blogContent: null}
		}else if (nextProps.username !== prevState.username){
			return {username: nextProps.username, publicOnly: nextProps.publicOnly};
		}else if (nextProps.blogId !== prevState.blogId){
			return {blogId: nextProps.blogId}
		}
		return null;
	}

	componentDidMount(){
		if (this.state.blogId !== null){
			this.fetchGist(this.state.blogId);
		}else{
			this.fetchGistList();
		}
	}

	componentDidUpdate(prevProps, prevState){
		if (prevState.username !== this.state.username){
			this.fetchGistList();
		}
		if (prevState.blogId !== this.state.blogId && this.state.blogId !== null){
			this.fetchGist(this.state.blogId);
		}
	}

	fetchGistList(){
		axios.get(`${this.root}/users/${this.state.username}/gists`)
		.then((response)=>{
			this.setState({gistList: response.data, isLoading: false})
		})
		.catch((error)=>{
			alert("Oops! Something went wrong :(");
			this.setState({ redirect: true });
		})
	}

	UTCtoLocaleTime(UTC) {
		var date = new Date(UTC);
	    var hours = date.getHours();
	    var minutes = date.getMinutes();
	    var ampm = hours >= 12 ? 'pm' : 'am';
	    hours = hours % 12;
	    hours = hours ? hours : 12; // the hour '0' should be '12'
	    minutes = minutes < 10 ? '0' + minutes : minutes;
	    var strTime = hours + ':' + minutes + ' ' + ampm;
		return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "  " + strTime;
	}

	fetchGist(blogId){
		var gistURI = `https://gist.githubusercontent.com/${this.state.username}/${blogId}/raw`;
		this.setState({isReading: true, isLoading: true, blogId});
		axios.get(`${gistURI}`)
		.then((response)=>{
			var converter = new showdown.Converter();
		  	var blogContent = converter.makeHtml(response.data);
			this.setState({isReading: true, isLoading: false, blogContent});
		})
		.catch((error)=>{
			alert("Oops! The blog cannot be found :(");
			this.setState({ redirect: true })
		})
	}

	render(){
		const {redirect, gistList, publicOnly, isLoading, isReading, blogContent} = this.state;
		if (redirect) {
			return <Redirect to='/'/>;
		}
		var gists = [];
		for (var i = 0 ; i < gistList.length ; i++){
			let gist = gistList[i];
			if (publicOnly && !gist.public){
				continue;
			}
			gists.push(
				<li key={gist.id}>
					<Style.Title>{Object.keys(gist.files)[0].split(".")[0]}</Style.Title>
					<Style.Description>{gist.description}</Style.Description>
					<Style.Date>Written at {this.UTCtoLocaleTime(gist.created_at)}</Style.Date>
					<Style.Link><Link to={`/blog/${gist.id}`}>Read more</Link></Style.Link>
				</li>
			);
		}
		return(
			<React.Fragment>
				<Style.Loading isLoading={isLoading}/>
				{isReading ? (
					<GistReader blogContent = {blogContent}/>
					) : (
					<Style.ul>{ gists }</Style.ul>
				)}
			</React.Fragment>
		);
	}
}

const GistReader = (props)=>{
	return (
		<div dangerouslySetInnerHTML={{__html: props.blogContent}}></div>
		);
}
