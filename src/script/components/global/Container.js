import React from "react"
import {ContainerStyle, HomeBtnStyle, Title, HR, H3} from "./style"
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
			<ContainerStyle active={this.state.init} ContainerWidth={this.props.width}>
	          	<HomeBtnStyle onClick = {this.historyBack} >
	  				<FaArrowLeft />
	  			</HomeBtnStyle>
				<Title>
					<h2>{this.props.FirstTitle}</h2>
					<HR />
					{
						this.props.SecondTitle ? <H3>{this.props.SecondTitle}</H3> : null
					}
				</Title>
				{this.props.children}
			</ContainerStyle>
		);
	}


}
