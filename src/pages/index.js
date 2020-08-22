import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

const siteTitle = `Hi, I'm Lizzie!`;
const siteDescription = 'I am a Dartmouth College student studying Computer Science and Mathematics. I am passionate about technology, math, and art. Scroll down to see more!';

const IndexPage = () => (
  <Container fluid>
    <Row>
      <NavBar showWork={true} />
      <Col xs={12} sm={8}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
      </Col>
    </Row>
  </Container>
)

export default IndexPage;
