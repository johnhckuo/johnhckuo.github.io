import React from "react"
import * as Style from "./style"
import Container from "../global/Container"
import GistReact from "./GistReact"

export default class Blog extends React.Component{
	constructor(props){
		super(props);
		this.state = {username: "johnhckuo"}
	}

	componentDidMount(){
	}

	render(){
		return(
			<Container
				width={this.props.device === "laptop" ? "small" : "large"}
				history={this.props.history}
				FirstTitle = "Blog"
        SecondTitle = "I write to make sense of the world"
			>
				<GistReact username={this.state.username} publicOnly="true"/>
			</Container>
		);
	}


}
