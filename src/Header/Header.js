import React, { Component } from 'react';
import HeaderUser from './Header-user.js';
import './../css/Header.css';

class Header extends Component{
	render(){
		return (
			<div className="Header">
				<HeaderUser />
				<div className="Header-banner"></div>
        	</div>
        );
	}
}
export default Header;