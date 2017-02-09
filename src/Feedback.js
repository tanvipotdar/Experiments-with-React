import React from 'react';

import './css/shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';

import know from './img/feedback.jpg';
import Layout from './Layout.js'

var Feedback = React.createClass({
    render: function(){
        return (
            <Grid>
              <Row>
                <Layout />
              </Row>

              <Row>
                <Caro />
              </Row>

              <Row>
                <Testimonials />
              </Row>
            </Grid>
        );
    }
});


var Caro = React.createClass({

  render: function() {

    var CaroStyle = {
      width: '100%',
      height: '20%',
      textAlign:'center',
      padding: '1px'
    }

    var ImgStyle = {
      width: '100%',
      height: '20%px'
    }

    return (
      <div style={CaroStyle}>
          <img style={ImgStyle} src={know}/>
      </div>
    );
  }
});

var Testimonial = React.createClass({



  render: function() {

    var caroStyle = {
      width: 1300,
      align: 'text-center',
    };

    var TextStyle = {
      fontSize: '18px',
    };

    return (
      <Carousel>
        <Carousel.Item>
          <p>blah blah blah</p>
          <Carousel.Caption>
            <h1>Welcome to Shreyas Hospital</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p>blah blah blah</p>
          <Carousel.Caption>
            <h1>Meet our Doctors</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p>blah blah blah</p>
          <Carousel.Caption>
            <h1>Book your Appointment</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

var Testimonials = React.createClass({
  render:function(){

    var JStyle = {
      backgroundColor: 'black',

    }

    var TextStyle = {
      fontSize: '23px',
      color: '#FFF0F5',
      fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      italics:'True'
    };

    var HStyle = {
      color: '#FFF0F5'
    }
    return(
      <Jumbotron style={JStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p style={TextStyle}>"Best place to have treatment - excellent staff and superior quality care."</p>
           </div>
            <div className="col-md-6">
              <h1><big>About Us</big></h1>
              <p style = {TextStyle}>Shreyas Hospital was established in 1993 by Dr. Sandeep Potdar, a General Surgeon who secured his M.S from the University of Mumbai, and Dr. Sunita Potdar, who completed her M.B.B.S in B.J.Medical College, Pune. </p>
              <p style = {TextStyle}>We are a well maintained and progressive hospital, treating a wide range of health issues using superior technology and the latest research. We have been certified as an <b>ISO 9001:2000</b> approved hospital.</p>
            </div>
          </div>
        </div>
      </Jumbotron>

      )
  }

})


export default Feedback;
