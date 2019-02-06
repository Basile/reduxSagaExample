import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import EntityListContainer from './container/EntityListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <EntityListContainer />
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
