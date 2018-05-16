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