import React from "react"
import * as Style from "./style"
import { FaArrowLeft } from 'react-icons/fa';

export default class Container extends React.Component{
	constructor(props){
		super(props);
	    this.historyBack = this.historyBack.bind(this);
	    this.state={
	      init: false
	    }
	}

	historyBack(){
		this.setState({init: false});
		setTimeout(()=>{
			this.props.history.goBack();
			var re = /^\/blog\/(?=.*\w).+$/;
			if (re.test(this.props.history.location.pathname)){
				this.setState({init: true});
				window.scrollTo(0, 0);
			}
		}, 650)
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({init: true});
			window.scrollTo(0, 0);
		}, 650)
	}

	render(){
		return(
			<Style.Container active={this.state.init} ContainerWidth={this.props.width}>
	          	<Style.HomeBtn onClick = {this.historyBack} >
	  				<FaArrowLeft />
	  			</Style.HomeBtn>
				<Style.Title>
					<h2>{this.props.FirstTitle}</h2>
					<Style.HR />
					{
						this.props.SecondTitle ? <Style.H3>{this.props.SecondTitle}</Style.H3> : null
					}
				</Style.Title>
				{this.props.children}
			</Style.Container>
		);
	}


}
