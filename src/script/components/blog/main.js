import React from "react"
import * as Style from "./style"
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
				FirstTitle = "Blog"
        		SecondTitle = "I write to make sense of the world"
			>
				<GistReact blogId={this.state.blogId} username={this.state.username} publicOnly="true"/>
			</Container>
		);
	}


}
