import React from "react"
import * as Style from "./style"
import {FaAmericanSignLanguageInterpreting, FaCode, FaHeart, FaSmile } from 'react-icons/fa';
import myself from "../../../images/aboutme_cover.jpg"
import {HR} from "../global/style"
import Container from "../global/Container"

const Aboutme = (props)=>{
	return(
		<Container
			width="large"
			FirstTitle="Hello!"
			SecondTitle={<React.Fragment>I am John Kuo! <br /> And this is me in Abisko. <FaSmile /></React.Fragment>}
			history={props.history}
		>
			<Style.Banner>
				<img src={myself} alt="Me at Sweden"/>
			</Style.Banner>
			<Style.Intro>
				<div>
					<Style.Aboutme>
						<Style.Characteristic device={props.device}>
							<div><FaAmericanSignLanguageInterpreting />I&#39;m a team player</div>
							<div><FaCode />I got mad skills</div>
							<div><FaHeart />I am passionate</div>
						</Style.Characteristic>
						I hold over 7 years of programming experience. <br />
						And love to work on some side projects related to web development, blockchain applications, and 3D game development.
						<HR />
						I&#39;ve received my master degree in July, 2017. <br />
						My research is based on blockchain, and I&#39;ve proposed a method to facilitate
						the design of a blockchain-based ecosystem toward success and to make it self-sustaining. <br />
						In the meanwhile, I&#39;ve also built a web-based farming game called <a target="_blank" rel="noopener" aria-label="blockfarm" name="blockfarm" href="https://github.com/johnhckuo/Block-Farm">Blockfarm</a> that allows users to trade with multiple users at the same time! <br />
						What make this game so special are that:
						<ul>
							<li>All the trading process and results will be recorded on Ethereum.</li>
							<li>Players can choose to play as a thief to steal other farmers&#39; crops, or to play as cop to guard the farmers.</li>
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
