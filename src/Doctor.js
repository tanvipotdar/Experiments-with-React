import React from 'react';

import './css/shreyas.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

import lap from './img/laproscopic_surgery.JPG';
import onco from './img/oncology.jpg';
import diab from './img/diabetes.jpg';
import can from './img/micronco.jpg';
import gyne from './img/gyne.jpg';
import gen from './img/gensug.jpg';
import endo from './img/endo.jpg';
import Footer from './Footer.js'


import { Link } from 'react-router';
import Layout from './Layout.js'

var Doctor = React.createClass({
    render: function(){
        return (
            <Grid>
              <Row>
                <Layout />
              </Row>

              <Row>
                <Doctors />
              </Row>
              <Footer />

            </Grid>
        );
    }
});


var Doctors = React.createClass({



  render: function(){

  var ThumStyle = {
    fontSize: '21.5px',
  }

  var thumbnailStyle={
    margin: '0px 0px 20px 10px'
  }

    return(
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail style={thumbnailStyle} src={gen} responsive>
                <h3>G.I Endoscopy</h3>
                <p>Dr.Sandeep Potdar, one of the founding members and our primary surgeon, 
                performs G.I.Endoscopy and provides medical consulatation every evening in his OPD services.</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail style={thumbnailStyle} src={endo} responsive>
                <h3>General Surgery</h3>
                <p>Dr.Sandeep Potdar, one of the founding members and our primary surgeon, 
                performs General Surgery and provides medical consulatation every evening in his OPD services.</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail style={thumbnailStyle} src={lap} responsive>
                <h3>Laparoscopic Surgery</h3>
                <p>Dr.Sandeep Potdar, one of the founding members and our primary surgeon, 
                performs Laparoscopic surgeries and provides medical consulatation every evening in his OPD services.</p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={3}>
              <Thumbnail style={thumbnailStyle} src={onco} responsive>
                <h3 style={ThumStyle}>Cardiology</h3>
                 <p>We have cardiologists on call to offer medical consulatations and perform routine cardiological procedures.</p>
              </Thumbnail>
            </Col>
            <Col xs={4} md={3}>
              <Thumbnail style={thumbnailStyle} src={gyne} responsive>
                <h3 style={ThumStyle}>Gynecology</h3>
                <p>Specialised laparoscopic gynecological procedures and routing gynae procedures are performed at our hospital.</p>
              </Thumbnail>
            </Col>
            <Col xs={4} md={3}>
              <Thumbnail style={thumbnailStyle} src={diab} responsive>
                <h3 style={ThumStyle}>Diabetes</h3>
                <p>We have an on-call diabetologist who offers care and medical consultation for diabetic patients. This also covers endocrinology.</p>
              </Thumbnail>
            </Col>
            <Col xs={4} md={3}>
              <Thumbnail style={thumbnailStyle} src={can} responsive>
                <h3 style={ThumStyle}>General Medicine</h3>
                <p>In addition, we cover a range of other specialities and super-specialities. For an appointment, please <Link to="/contact_us">Contact Us</Link></p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      );
    }
  })



export default Doctor;
