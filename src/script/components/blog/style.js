import styled, {keyframes} from 'styled-components';

const spin = keyframes`
	0%{transform: rotate(0deg);}
	100%{transform: rotate(360deg);}
`;

export const Loading = styled.div`
	position:absolute; 
	border: 5px solid #f3f3f3; 
	-webkit-animation: ${spin} 1s linear infinite; 
	animation: ${spin} 1s linear infinite; 
	border-top: 5px solid #555; 
	border-radius: 50%; 
	width: 30px; 
	height: 30px; 
	top: 10px; 
	right: 10px;
	transition: all .5s;
	opacity: ${props=>props.isLoading ? 1 : 0};
`;

export const Link = styled.span`
	color: #282828;
	padding: 10px 10px;
	font-size: 1rem;
	display: inline-block;
	border: 1px solid;
	border-color: rgba(229,230,233,0.5) rgba(223,224,228,0.5) #d0d1d5;
	border-radius: 3px;
	text-decoration: none;
	background: #fff;
	cursor: pointer;
	transition: all .5s;
	width: 90px;
	text-align: center;
	a{
		color: initial;
  		text-decoration: initial;
	}
	&:hover{
		color: #383838;
		box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
	}

`;

export const Title = styled.div`
	font-size: 1.5rem;
    color: black;
`;

export const Description = styled.div`
	color: #666666;
	width: 80%;
`;

export const Date = styled.div`
	color: #666666;
`;

export const ul = styled.ul`
	li{
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 25px;
		padding-bottom: 15px;
		box-sizing: border-box;
		*{
			margin-bottom: 15px;
		}
		&:after{
			content:""; 
			position: absolute; 
			bottom: 0; 
			left: 0; 
			height: 1px; 
			width: 100%;
			background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#555), to(transparent));
			background-image: -webkit-linear-gradient(left, #555, transparent);
			background-image: -moz-linear-gradient(left, #555, transparent);
			background-image: -o-linear-gradient(left, #555, transparent);
		}
	}

`;