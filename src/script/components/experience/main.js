import React from "react"
import * as Style from "./style.js"
import * as GlobalStyle from "../global/style"
import Experiences from "./data"
import Container from "../global/Container"

const Experience =(props)=>{
	return (
		<Container
			type="large"
			history={props.history}
			FirstTitle="Experience"
			SecondTitle={<React.Fragment>Besides from my research, <br /> I&#39;ve applied interships in various industries in order to pursue my dream</React.Fragment>}
		>
			<Style.Timeline window={props.width > GlobalStyle.mobileWidth ? "laptop" : "mobile"}>
				{
					Experiences.map((experience, index)=>{
						return (
							<Style.Column key={index} window={props.width > GlobalStyle.mobileWidth ? "laptop" : "mobile"}>
								<div>
									<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
									<h1>{experience.title}</h1>
									<h3>@ {experience.company}</h3>

								</div>
								<div>
									{
										experience.description.map((content, index)=><p key={index}>● {content}</p>)
									}
								</div>
							</Style.Column>
						);
					})
				}
			</Style.Timeline>
		</Container>
	);
}

export default Experience;
