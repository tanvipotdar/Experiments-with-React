import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

import update from "react-addons-update";

import Map from "./SimpleMap";

import Layout from './Layout.js'

import dark from './img/grad_dark.jpg'
import Footer from './Footer.js'



var Contact = React.createClass({
    render: function(){

        return (
            <Grid>
              <Row>
                <Layout />
              </Row>
              <Row>
                <Map />
              </Row>
              <Row>
                <Details />
              </Row>
              <Footer />
            </Grid>
        );
    }
});

function FieldGroup({ id, label, help, ...props }) {

    var TextStyle = {
      fontSize: '15px',
      color: '#FFF0F5'
    };

  return (
    <FormGroup controlId={id}>
      <ControlLabel style={TextStyle}>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


var Email = React.createClass({

  clearInput(){
    this.refs.name=""
  } ,

  render:function(){

    var TextStyle = {
      fontSize: '15px',
      color: '#FFF0F5'
    };

    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="name"
          label="Name"
          placeholder="Enter full name"
          ref="name"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email address"
        />
        <FieldGroup
          id="formControlsPassword"
          label="Subject"
          type="subject"
        />
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel style={TextStyle}>Message</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Please only enter requests for appointment - no diagnosis can be offered via email." />
        </FormGroup>

        <Button bsStyle="primary" style = {TextStyle}>Contact Us</Button>
      </form>
  )
}
});


var Info = React.createClass({

	render: function(){

    var JStyle = {
      backgroundColor: 'black',
    }

    var TextStyle = {
      fontSize: '17px',
      color: '#FFF0F5'
    };

    var TextStyle1 = {
      fontSize: '25px',
      fontWeight: '100px',
      color:'#FFF0F5'
    };

	  	return(
        <div>
          <p style = {TextStyle1}>Shreyas Hospital</p>
          <p style = {TextStyle}>Sai Nagar, Vasai (W)</p>
          <p style = {TextStyle}>Maharashtra</p>
          <p style = {TextStyle}>India</p>
          <p style = {TextStyle}>401202</p>
          <p style = {TextStyle}>Telephone: +91-250-2337053, 2338445</p>
        </div>
		);
	}
});


var Info1 = React.createClass({

  render: function(){

    var JStyle = {
      backgroundColor: 'black',
    }

    var TextStyle = {
      fontSize: '17px',
      color: '#FFF0F5'
    };

    var TextStyle1 = {
      fontSize: '25px',
      fontWeight: '100px',
      color:'#FFF0F5'
    };

      return(
        <div>
          <p style = {TextStyle1}>Our Timings</p>
          <p style = {TextStyle}>Dr Sandeep Potdar is available for OPD from 11 a.m. to 1 p.m. in the afternoon and 7 p.m. to 9 p.m. in the evening.</p>
          <p style = {TextStyle}>An HDU, Operation Theatre, Indoor admission facility and Out Patient Procedure is also available at Shreyas. </p>
          <p style = {TextStyle}>All our other specialists are available on call or by appointment. To book an appointment, please call us.</p>
          <p style = {TextStyle}>We are available and committed to serving you 24/7. </p>
        </div>
    );
  }
});

var Details = React.createClass({

  render: function(){

    var JStyle = {
      background: 'url(https://i.stack.imgur.com/p9mUO.jpg)',
    }

    var TextStyle = {
      fontSize: '16px',
    };

    return(
    <Jumbotron style={JStyle}>  
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Info />
         </div>
          <div className="col-md-6">
            <Info1 />
          </div>
        </div>
      </div>
    </Jumbotron>
      );
  }
});


export default Contact