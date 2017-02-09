import React from 'react';
import ReactDOM from 'react-dom';

import './css/shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';

import hand from './img/slider-holding-hands.jpg';
import op from './img/slider-op-theatre.jpeg';
import xray from './img/slider-xray.jpg';

import { Link } from 'react-router';
import Layout from './Layout.js'
import Footer from './Footer.js'


var App=React.createClass({
    render: function(){
        return (
            <Grid>
              <Row>
                <Layout />
              </Row>

              <Row>
                <Caro />
              </Row>

              <DesWho />
              <Footer />

            </Grid>
        );
    }
});


var Caro=React.createClass({



  render: function() {

    var caroStyle={
      margin: '0px 2px 0px 30px',
      align: 'text-center',
    };

    var TextStyle={
      fontSize: '18px',
    };

    return (
      <Carousel style={caroStyle}>
        <Carousel.Item>
          <img xs={6} md={4} alt="1500x500" src={hand} responsive/>
          <Carousel.Caption>
            <h1>Welcome to Shreyas Hospital</h1>
            <Link to={"/"}><Button bsStyle="primary" style={TextStyle}>About Us</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img xs={6} md={4} alt="1500x500" src={op} responsive/>
          <Carousel.Caption>
            <h1>Meet our Doctors</h1>
            <Link to="/doctors"><Button bsStyle="primary" style={TextStyle}>Our Services</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img xs={6} md={4} alt="1500x500" src={xray} responsive/>
          <Carousel.Caption>
            <h1>Book your Appointment</h1>
            <Link to="/contact_us"><Button bsStyle="primary" style={TextStyle}>Contact Us</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

var DesWho=React.createClass({

  render: function(){


    var TextStyle={
      fontSize: '16px',
    };

    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1><big>What we do</big></h1>
          <p style={TextStyle}>While we primarily specialise in Laparoscopy and Endoscopy, we are open and invested in treating anything we can, 24 hours a day, 7 days a week. 
          We value using cutting-edge technology to better our surgical processes and expand our range of services. For example, we are one of the few clinics in Mumbai to own a 
          Harmonic Scalpel which results in almost 'bloodless' surgery. We are committed to providing our patients with the best care and treatment possible, along with a seamless 
          recovery process.</p>
       </div>
        <div className="col-md-6">
          <h1><big>About Us</big></h1>
          <p style={TextStyle}>Shreyas Hospital was established in 1993 by Dr. Sandeep Potdar, a General Surgeon who secured his M.S from the University of Mumbai, and Dr. Sunita Potdar, who completed her M.B.B.S from B.J.Medical College, Pune. </p>
          <p style={TextStyle}>We are a well maintained and progressive hospital, treating a wide range of health issues using superior technology and the latest research. We have also been certified as an <b>ISO 9001:2000</b> approved hospital.</p>
        </div>
      </div>
    </div>
      );
  }
});




ReactDOM.render(<App />, document.getElementById('root'))

export default App;
