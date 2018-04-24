import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'

import Routes from "./components/route/main"
import "../style/reset.css"
import "../style/global.css"

const app = document.getElementById('app')
const BaseURL = "https://johnhckuo.github.io/";

ReactDOM.render(
	<BrowserRouter basename={BaseURL}>
		<Routes />
	</BrowserRouter>
 , app);
