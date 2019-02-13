import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import EntityListContainer from './container/EntityListContainer';
import ButtonListContainer from './container/ButtonListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <EntityListContainer />
          </Col>
          <Col>
            <ButtonListContainer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
