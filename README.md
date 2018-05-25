# React-Router 的使用 #

**、构建App**

	create-react-app react_spa
	cd react_spa
	npm i react-router-dom --save

**二、整理项目结构**

　　1、将原来项目中 public 和 src 文件夹下的文件(夹)删除

　　2、在 public 文件夹下创建一个 index.html 作为 app 的入口

	// index.html
	<DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>React Router Example</title>
		</head>
		<body>
			<div id="root"></div>
		</body>
	</html>

**3、在 src 文件夹下创建一个 index.js 文件做为我们的入口文件，创建 main.js 文件做为主文件**

	// index.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	import Main form './main';
	ReactDOM.render(
		<Main />,
		document.getElementById('root')
	)

	// main.js
	import React, { Component } from 'react';
	import { Route, NavLink, HashRouter } from 'react-router-dom';
	import Home form './views/home';
	import About from './views/about';
	import Contact from './views/contact';
	class Main extends Component {
		render() {
			return (
				<HashRouter>
					<div>
						<ul>
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</div>
					<div>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</div>
				</HashRouter>
			)
		}
	}

**4、在 src 文件夹下面创建 views 文件夹,创建文件  home.js、about.js、contact.js**

	// home.js
	import React, { Component } from 'react';
	class Home extends Component {
		render() {
			return (
				<div>
					<h1>Home Page</h1>
					<p>...some code</p>
				</div>
			)
		}
	}

	// about.js
	import React, { Component } from 'react';
	class About extends Component {
		render() {
			return (
				<div>
					<h1>About Page</h1>
					<p>...some code</p>
				</div>
			)
		}
	}

	// contact.js
	import React, { Component } from 'react';
	class Contact extends Component {
		render() {
			return (
				<div>
					<h1>Contact Page</h1>
					<p>...some code</p>
				</div>
			)
		}
	}

**5、运行 npm start 启动**


