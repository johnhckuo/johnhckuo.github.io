import React from "react"
import * as Style from "./style"
import axios from "axios"
import showdown from "showdown"

export default class GistReact extends React.Component{
	constructor(props){
		super(props);
		this.state = {username : null, gistList: [], publicOnly: false, isReading: false, isLoading: "true", blogContent: null}
		this.root = "https://api.github.com";
		this.fetchGistList = this.fetchGistList.bind(this);
		this.UTCtoLocaleTime = this.UTCtoLocaleTime.bind(this);
		this.readMore = this.readMore.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if (nextProps.username !== prevState.username){
			return {username: nextProps.username, publicOnly: nextProps.publicOnly};
		}
		return null;
	}

	componentDidMount(){
		this.fetchGistList();
	}

	componentDidUpdate(prevProps, prevState){
		if (prevState.username !== this.state.username){
			this.fetchGistList();
		}
	}

	fetchGistList(){
		axios.get(`${this.root}/users/${this.state.username}/gists`)
		.then((response)=>{
			console.log(response.data)
			this.setState({gistList: response.data, isLoading: false})
		})
		.catch((error)=>{
			alert("Oops! Something went wrong :(");
			console.log(error);
		})
	}

	UTCtoLocaleTime(UTC) {
		var date = new Date(UTC);
		return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
	}

	readMore(URI){
		this.setState({isReading: true, isLoading: true});
		axios.get(`${URI}`)
		.then((response)=>{
			var converter = new showdown.Converter();
		    var blogContent = converter.makeHtml(response.data);
			this.setState({isReading: true, isLoading: false, blogContent: blogContent});
		})
		.catch((error)=>{
			alert("Oops! Something went wrong :(");
			console.log(error);
		})
	}

	render(){
		var gistList = [];
		for (var i = 0 ; i < this.state.gistList.length ; i++){
			let gist = this.state.gistList[i];
			if (this.state.publicOnly && !gist.public){
				continue;
			}
			let gistURI = gist.files[Object.keys(gist.files)[0]].raw_url;
			gistList.push(<li key={gist.id}>
				{Object.keys(gist.files)[0]}
				date: {this.UTCtoLocaleTime(gist.created_at)}
				<div onClick={() => this.readMore(gistURI)}>
				Read more
				</div>
				</li>); 
		}
		return(
			<React.Fragment>
				<Style.Loading isLoading={this.state.isLoading}/>
				{this.state.isReading ? (
					<GistReader blogContent = {this.state.blogContent}/>
					) : (
					<ul>{ gistList }</ul>
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