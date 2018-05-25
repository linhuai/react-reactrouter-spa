import React, { Component } from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';

import './App.css';

class App extends Component {
  render() {
    return (
			<HashRouter>
				<div className="app">
					<ul className="nav">
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/about">About</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
    );
  }
}

export default App;
