import styled from 'styled-components';

function inputCommon() {
  return `
  	box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	-moz-box-sizing: border-box;
  	border: 1px solid #C2C2C2;
  	box-shadow: 1px 1px 4px #EBEBEB;
  	-moz-box-shadow: 1px 1px 4px #EBEBEB;
  	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
  	border-radius: 3px;
  	-webkit-border-radius: 3px;
  	-moz-border-radius: 3px;
  	padding: 7px;
  	outline: none;
    width: 100%;
    &:focus{
   		border: 1px solid #0C0;
    }
  `;
}

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.div`

	display: inline;
	&>div{
		display: flex;
		margin-top: 5px;
	    flex-direction: ${props=> props.device === "mobile" ? "column" : "row"};
	    margin-top:25px;
	    margin-bottom:25px;
	}
	label{
		position:relative;
	    display: block;
	    margin: 0px 0px 15px 0px;
    	&>span{
		    width: 80px;
		    font-weight: bold;
		    float: left;
		    padding-top: 8px;
		    padding-right: 5px;
    	}
	}

  input{
    ${inputCommon()};
  }

  textarea{
    ${inputCommon()}
    height:100px;
  }

  i{
    display: ${props=>props.device === "mobile" ? "none" : "inline-block"};
    width: 200px;
    color: red;
    font-size: 1rem;
    position: absolute;
    top: -1.1rem;
    font-weight: lighter;
  }
`;

export const EmailMe = styled.p`
	text-align: center;
	padding: 4%;
	font-weight: bold;
	a{
		text-decoration: none;
		color: gray;
	}
`;
