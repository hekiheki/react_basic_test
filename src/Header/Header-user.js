import React, { Component } from 'react';
import './../css/Header.css';

class HeaderUser extends Component{
	render(){
		return (
			<div className="Header-user">
				欢迎 <span className="user">XXX</span>登录 <span className="logout">注销</span>
			</div>
		);
	}
}
export default HeaderUser;