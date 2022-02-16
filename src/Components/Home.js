import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
	<div style={{'textAlign':'center'}}>
		<button style={{'backgroundColor':'#404040','color':'#eee','fontSize':'25px','borderRadius':'5px','margin':'10px'}}>
			<Link to='/about'>Get Started</Link>
		</button>
	</div>
	)
}