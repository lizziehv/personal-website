import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Card from '../components/Card'

const siteTitle = `About`;
const siteDescription = '';

const AboutPage = () => (
  <div className="page">
    <Row>
      <NavBar />
      <Col xs={12} sm={8}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
        <Row>
          <Card title="Code Samples" img={require("../static/images/code-samples.png")}/>
          <Card title="Projects" img={require("../static/images/project-covers.png")}/>
        </Row>
        <Row>
          <Card title="Art Portfolio" img={require("../static/images/code-samples.png")}/>
        </Row>
      </Col>
    </Row>
  </div>
)

export default AboutPage;
