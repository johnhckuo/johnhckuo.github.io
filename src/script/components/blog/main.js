import React from "react"
import PropTypes from 'prop-types';
import Container from "../global/Container"
import GistReact from "./GistReact"

export default class Blog extends React.Component{
	constructor(props){
		super(props);
		this.state = {username: "johnhckuo", blogId: null}
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if (typeof nextProps.match.params.id !== "undefined"){
			return {blogId: nextProps.match.params.id};
		}
		return null;
	}

	render(){
		return(
			<Container
				width="large"
				history={this.props.history}
				FirstTitle = "Some notes and random thoughts"
				//SecondTitle = {<React.Fragment>“ I write to make sense of the world ”</React.Fragment>}
				SecondTitle={<React.Fragment>“I got a bad memory.” <br /> -me</React.Fragment>}
			>
				<GistReact blogId={this.state.blogId} username={this.state.username} history={this.props.history} publicOnly="true"/>
			</Container>
		);
	}


}


Blog.propTypes = {
	match: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
}