import React from "react"
import { Link } from 'react-router-dom'
import * as Style from "./style"
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare, FaSteamSquare } from 'react-icons/fa';
import myself from "../../../images/me.jpg"

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {init: false};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 500)

    window.scrollTo(0, 0);
    this.props.blur(false);
  }

  componentWillUnmount(){
    this.setState({
      init:false,
    })
    this.props.blur(true);
  }

  render(){
    return(
      <Style.IndexContainer device={this.props.device} active={this.state.init} >
        <Style.Icon>
          <img src={myself} alt="My selfie"/>
        </Style.Icon>
        <Style.Intro expand={this.state.init || this.props.loaded} device={this.props.device}>
          <h1>John Kuo</h1>
          <Style.HR />
          <h2>Passionate Programmer / Amateur Gamer</h2>
        </Style.Intro>
        <Style.Links device={this.props.device}>
          <Link to="/aboutme"><Style.Link firstLink={true}>About Me</Style.Link></Link>
          <Link to="/experience"><Style.Link>Experience</Style.Link></Link>
          <Link to="/portfolio"><Style.Link>Portfolio</Style.Link></Link>
          <Link to="/blog"><Style.Link lastLink={true}>Blog</Style.Link></Link>
        </Style.Links>
        <Style.SocialIcon device={this.props.device}>
          <a rel="noopener" aria-label="github" name="github" href="https://github.com/johnhckuo" target="_blank"><FaGithubSquare /></a>
          <a rel="noopener" aria-label="linkedin" name="linkedin" href="https://www.linkedin.com/in/hung-chung-kuo/" target="_blank"><FaLinkedin /></a>
          <a rel="noopener" aria-label="email" name="email" href="mailto:johnhckuo@gmail.com" target="_blank"><FaEnvelopeSquare /></a>
          <a rel="noopener" aria-label="steam" name="steam" href="https://steamcommunity.com/id/grpforever/" target="_blank"><FaSteamSquare /></a>
        </Style.SocialIcon>
      </Style.IndexContainer>

    );
  }
}
