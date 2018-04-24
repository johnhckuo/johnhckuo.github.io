import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, hashHistory } from 'react-router-dom'

import Routes from "./components/route/main"
import "../style/reset.css"
import "../style/global.css"

const app = document.getElementById('app')

ReactDOM.render(
	<BrowserRouter history={hashHistory}>
		<Routes />
	</BrowserRouter>
 , app);
