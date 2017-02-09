import React from 'react';

import logo from './img/logo.png';
import './css/shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Footer from './Footer.js'

import { Link } from 'react-router';

var Layout = React.createClass({
    render: function(){
        return (
            <Grid>
              <Row>
                <Col xs={5} md={3}><NavHeader /></Col>
              </Row>

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
          <h1 style={h1Style}><Link to="/"><img src={logo}></img></Link></h1>
        );
    }
});


var NavHeader = React.createClass({
  render:function(){

    var navigationItemStyle = {
      display: 'inline-block',
      width: '1130px',
      height:'0px',
      margin: '30px 20px',
      fontSize: '16px',
      fontWeight: '400',
      backgroundColor: 'white',
      borderTop:'0px',
      borderLeft:'0px',
      borderRight:'0px',
      borderBottom: '2px solid transparent black',
      paddingBottom: '90px',
    };

    var headerStyle = {
      width: '10px',
      height:'0px',
      margin: '-20px 0px 0px -20px',
      fontFamily: '"Raleway", sans-serif',
    };

    var itemStyle = {
      margin: '0px 0px 0px 0px',
      fontFamily: '"Raleway", sans-serif',
    };


    return(
  <Navbar inverse collapseOnSelect style={navigationItemStyle}>
    <Navbar.Header style={headerStyle}>
      <Brand />
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight style={itemStyle}>
        <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
        <NavItem eventKey={1}><Link to="/doctors">Services and Specialities</Link></NavItem>
        <NavItem eventKey={2}><Link to="/contact_us">Contact Us</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>   
    );

  }

})


export default Layout;
