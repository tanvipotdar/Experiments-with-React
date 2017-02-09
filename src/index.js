
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import Contact from './Contact.js'
import Feedback from './Feedback.js'
import Doctor from './Doctor.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/contact_us" component={Contact}/>
    <Route path="/feedback" component={Feedback}/>
    <Route path="/doctors" component={Doctor}/>
  </Router>
), document.getElementById('root'));