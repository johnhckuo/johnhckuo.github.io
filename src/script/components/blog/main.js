import React from "react"
import * as Style from "./style"
import Container from "../global/Container"

export default class Blog extends React.Component{
	constructor(props){
		super(props);
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

			</Container>
		);
	}


}
