import React from "react"
import * as Style from "./style"
import {Btn} from "../global/style"
import firebase from "firebase"
import Container from "../global/Container"

export default class Contact extends React.Component{
	constructor(props){
		super(props);
		this.formSubmit = this.formSubmit.bind(this);
		this.updateFormData = this.updateFormData.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.feedback = {
			name: "",
			email: "",
			message: ""
		}
		this.state = {
			email: true,
			name: true,
			message: true
		}
	}

	componentDidMount(){
		if (!firebase.apps.length) {
			var config = {
				apiKey: "AIzaSyA9QLI2RDzhBFAYb6LZq5bnsgYg28TNxeo",
				authDomain: "resume-f25af.firebaseapp.com",
				databaseURL: "https://resume-f25af.firebaseio.com",
				projectId: "resume-f25af",
				storageBucket: "resume-f25af.appspot.com",
				messagingSenderId: "1046487558013"
			};
			firebase.initializeApp(config);
		}
	}

	validateInput(type, input) {
		if (type === "email"){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    	return re.test(String(input).toLowerCase());
		}else{
			return input.replace(/\s/g,'') !== "";
		}

	}

	updateFormData(e){
		this.feedback[e.target.name] = e.target.value;
		this.setState({
			[e.target.name] : this.validateInput(e.target.name, e.target.value)
		});
	}

	formSubmit(){
		let validName = this.validateInput("name", this.feedback.name),
			validMessage = this.validateInput("message", this.feedback.message),
			validEmail = this.validateInput("email", this.feedback.email);
		if (!validName || !validMessage || !validEmail
		){
			alert("Oops, you've mis-filled some slots");
			this.setState({
				name: validName,
				message: validMessage,
				email: validEmail
			});
			return;
		}
		this.feedback.message = this.feedback.message.replace(/[^a-zA-Z 0-9]+/g,'');
		firebase.database().ref(this.feedback.name).set({
			email: this.feedback.email,
			message : this.feedback.message
		}).then(function(){
		  alert("I've received you message! :)");
		}).catch(function(error) {
		  alert("Oops, something went wrong :(" + error);
		});
	}

	render(){
		return(
			<Container
				width={this.props.device === "laptop" ? "small" : "large"}
				history={this.props.history}
				FirstTitle = "Any Message?"
			>
		        <Style.FormContainer>
			        <Style.Form device={this.props.device}>
			            <div>
			              <label><span>Name</span>{this.state.name ? null : <i>*Name missing</i>}</label>
			              <input type="text" name="name" onChange={this.updateFormData}/>
			            </div>
			            <div>
			              <label><span>Email</span>{this.state.email ? null : <i>*Invalid email</i>}</label>
			              <input type="text" name="email" onChange={this.updateFormData}/>
			            </div>
			            <div>
			              <label><span>Message</span>{this.state.message ? null : <i>No message for me? :(</i>}</label>
			              <textarea name="message" onChange={this.updateFormData}/>
			            </div>
			            <div>
			            	<Btn onClick={this.formSubmit}>Send</Btn>
			            </div>
			        </Style.Form>
		        </Style.FormContainer>
		        <Style.EmailMe>Or, just email me directly at <a href="mailto:johnhckuo@gmail.com" target="_blank"><strong>johnhckuo@gmail.com</strong></a>.</Style.EmailMe>


			</Container>
		);
	}


}
