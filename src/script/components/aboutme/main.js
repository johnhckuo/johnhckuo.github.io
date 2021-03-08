import React from "react"
import * as Style from "./style"
import {FaAmericanSignLanguageInterpreting, FaCode, FaHeart, FaSmile } from 'react-icons/fa';
import myself from "../../../images/aboutme_cover.jpg"
import {HR} from "../global/style"
import Container from "../global/Container"
import PropTypes from 'prop-types';

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
						I am a fullstack web developer and blockchain specialist focused on <u>web development</u>, <u>blockchain applications</u>, and <u>3D game design.</u><br />
						I&#39;ve received my master degree in July, 2017 and filed two blockchain patents in May, 2020. <br />
						<HR />
						The first patent is called <b><u>Blockchain Compliance Verification Network</u></b>(P202000947US01), which is a methodology that indicates whether the transfer of money complies with jurisdictional regulations
and records the message content including the compliance information via blockchain. <br />
						The second patent is called <b><u>Blockchain Settlement Network</u></b>(P202000953US01), and it is about how to detect off-chain settlement and then transfer digital value from the receiver to
the sender based on the detected settlement value. <br /><br />
						Besides from these, I&#39;m also working on some side-projects on github, and <a target="_blank" rel="noopener noreferrer" aria-label="blockfarm" name="blockfarm" href="https://github.com/johnhckuo/Block-Farm">Blockfarm</a> is one of them.<br />
						It is a farming game that allows users to trade with each other, and all the transaction will be recorded on Ethereum. <br /> So far Blockfarm has 300+ peak users!
					</Style.Aboutme>
				</div>
			</Style.Intro>
		</Container>
	);
}

Aboutme.propTypes = {
	history: PropTypes.object.isRequired,
	device: PropTypes.string
}

export default Aboutme;
