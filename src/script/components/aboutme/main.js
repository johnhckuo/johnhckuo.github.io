import React from "react"
import * as Style from "./style"
import {FaAmericanSignLanguageInterpreting, FaCode, FaHeartO, FaSmileO } from 'react-icons/lib/fa';
import myself from "../../../images/aboutme_cover.jpg"
import * as Global from "../global/style"
import HomeButton from "../global/HomeButton"

export default class Aboutme extends React.Component{
	constructor(props){
		super(props);
		this.state={
			init: false
		}
	}

	render(){
		return(
			<Global.Container active={this.state.init} type="large">
				<Style.Intro>
					<HomeButton history={this.props.history} setActive={(init)=>this.setState({init})} />
					<Global.Title>
						<h2>Hello</h2>
						<Global.HR />
						<h3>You can call me John! <FaSmileO /></h3>
					</Global.Title>
					<Style.Banner>
						<img src={myself} alt="Me at Sweden"/>
					</Style.Banner>
					<div>
						<Style.Aboutme>
							<Style.Characteristic width={this.props.width > Global.mobileWidth ? "100%" : "50%"}>
								<div><FaAmericanSignLanguageInterpreting />I'm a team player</div>
								<div><FaCode />I got mad skills</div>
								<div><FaHeartO />I am passionate</div>
							</Style.Characteristic>
							I am a graduate of the MIS department in National Chengchi University.<br />
							I hold over 7 years of programming experience. <br />
							Love to work on some side projects related to web development, blockchain applications, and 3D game development.
							<Global.HR />
							I've received my master degree in July, 2017. <br />
							My research is based on blockchain, and I've proposed a method to facilitate
							the design of a blockchain-based ecosystem toward success and to make it self-sustaining. <br />
							And I've built a web-based farming game that allows users to trade with multiple users at the same time! <br />
							What make this game so special are that: 
							<ul>
								<li>All the trading process and results will be recored on Ethereum blockchain.</li>
								<li>Players can choose to play as a thief to steal other farmers' crops, or to play as cop to guard the farmers.</li>
								<li>Farmers can have a multi-party transaction with other players. It means that if A got what B wants, B got what C wants, and C got what A wants, then a transaction consists of A → B → C → A will be established.</li>
							</ul>
							As a result, this game eventually hits 300+ active users.

						</Style.Aboutme>
					</div>
				</Style.Intro>
			</Global.Container>
		);
	}


}
