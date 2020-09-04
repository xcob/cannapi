import React from 'react';
import '../App.css';
import {Card, Button, Row, Col, Container } from 'react-bootstrap';
//import ReactDOM from "react-dom";
//import axios from 'axios';

export default class DisplayStrain extends React.Component {

  state = {
    strains: []
  }

  // componentDidMount() {
  //   axios.get(`http://dashboard.cannapi.co/strains`)
  //     .then(res => {
  //       console.log(res.data);
  //       const strains = res.data;
  //       this.setState({ strains });
  //     })
  //}

  render() {
    return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Card style={{ width: '3rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Strain Name 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '3rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Strain Name 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '3rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Strain Name 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '3rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Strain Name 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }
}


