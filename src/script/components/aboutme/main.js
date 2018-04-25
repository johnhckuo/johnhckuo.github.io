import React from "react"
import * as Style from "./style"
import {FaAmericanSignLanguageInterpreting, FaCode, FaHeartO, FaSmileO } from 'react-icons/lib/fa';
import myself from "../../../images/aboutme_cover.jpg"
import * as GlobalStyle from "../global/style"
import Container from "../global/Container"

const Aboutme = (props)=>{
	return(
		<Container
			type="large"
			FirstTitle="Hello"
			SecondTitle={<React.Fragment>You can call me John! <FaSmileO /></React.Fragment>}
			history={props.history}
		>
			<Style.Banner>
				<img src={myself} alt="Me at Sweden"/>
			</Style.Banner>
			<Style.Intro>
				<div>
					<Style.Aboutme>
						<Style.Characteristic width={props.width > GlobalStyle.mobileWidth ? "100%" : "50%"}>
							<div><FaAmericanSignLanguageInterpreting />I'm a team player</div>
							<div><FaCode />I got mad skills</div>
							<div><FaHeartO />I am passionate</div>
						</Style.Characteristic>
						I am a graduate of the MIS department in National Chengchi University.<br />
						I hold over 7 years of programming experience. <br />
						Love to work on some side projects related to web development, blockchain applications, and 3D game development.
						<GlobalStyle.HR />
						I've received my master degree in July, 2017. <br />
						My research is based on blockchain, and I've proposed a method to facilitate
						the design of a blockchain-based ecosystem toward success and to make it self-sustaining. <br />
						And I've built a web-based farming game called <a target="_blank" rel="noopener" aria-label="blockfarm" name="blockfarm" href="https://github.com/johnhckuo/Block-Farm">Blockfarm</a> that allows users to trade with multiple users at the same time! <br />
						What make this game so special are that:
						<ul>
							<li>All the trading process and results will be recored on Ethereum blockchain.</li>
							<li>Players can choose to play as a thief to steal other farmers' crops, or to play as cop to guard the farmers.</li>
							<li>Farmers can have a multi-party transaction with other players. It means that if A got what B wants, B got what C wants, and C got what A wants, then a transaction consists of A → B → C → A will be established.</li>
						</ul>
						<br />
						In the end, Blockfarm hits 300+ active users!

					</Style.Aboutme>
				</div>
			</Style.Intro>
		</Container>
	);
}

export default Aboutme;
