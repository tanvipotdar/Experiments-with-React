import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.png';
import './shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Navbar from 'react-bootstrap/lib/Navbar';

import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';

import hand from './slider-holding-hands.jpg';
import op from './slider-op-theatre.jpeg';
import xray from './slider-xray.jpg';

var PnV = React.createClass({
    render: function(){
        return (
            <Grid>
              <Row>
                <Col xs={12} md={8}><Brand /></Col>
                <Col xs={6} md={4} ><Navigation /></Col>
              </Row>

              <Row>
                <Content />
              </Row>

              <Row>
                <Caro />
              </Row>

              <Des_who />
            </Grid>
        );
    }
});

var Brand = React.createClass({
    render: function(){

        var h1Style = {
          color: '#e74c3c',
          fontSize: '28px',
          fontWeight: '600',
          textTransform: 'uppercase',
          textAlign: 'left'
        };
        return (
          <h1 style={h1Style}><a href="App.js"><img src={logo}></img></a></h1>
        );
    }
});


var Navigation = React.createClass({
  render: function () {

    var navigationStyle = {
      margin: '25px 0',
      textAlign: 'right'
    };

    var navigationIteamStyle = {
      display: 'inline-block',
      width: '100px',
      margin: '0 20px',
      fontSize: '16px',
      fontWeight: '400',
      color: '#000000',
    };

    return (
      <div style={navigationStyle}>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-1">
            <div className="row">
              <div className="col-sm-7">
                <span style={navigationIteamStyle}><Search /></span>
              </div>
              <div className="col-sm-4">
                <span style={navigationIteamStyle}>Translate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


var Content = React.createClass({
  render: function () {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '20px 0',
      overflow: 'hidden'
    };

    var contentHeaderStyle = {
      fontSize: '26px',
      fontWeight: '300',
      margin: '0 0 20px 0',
    };

    var contentStyle = {
      fontSize: '20px',
      margin: 0
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>
            <div className="col-sm-12">
              <h3 style={contentHeaderStyle}><Header_main /></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


var Search = React.createClass({
    render: function(){
        return <input className="searchbar-edit" type="text" ref="searchInput" placeholder="Search"/>
    }
});


var Header_main =  React.createClass({
  render: function(){
    return(
    <NavbarHeader>
      <div className="container">
        <nav id="user_nav">
          <ul>
            <li><a href="pnv.html">Patients & Visitors</a></li>
            <li><a href="doctors.html">Doctors</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="feedback.html">Feedback</a></li>
            <li><a href="contact_us.html">Contact Us</a></li>            
          </ul>
        </nav>
      </div>
    </NavbarHeader> 
    );
  }
})


export default PnV;
