import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ListGroup from 'react-bootstrap/ListGroup';

export default class EntityList extends React.Component {

  render() {
    return (
      <div>
        <ButtonToolbar className="mb-3">
          <Button variant="info" onClick={this.props.loadNewEntity}>
            Load New Entity
          </Button>
        </ButtonToolbar>

        {this.props.error && 
          <Alert variant="danger">
            {this.props.error}
          </Alert>
        }

        {this.props.congrats &&
          <Alert variant="success">You have just created 10 entities!</Alert>
        }
        <ListGroup>
          {this.props.entities.map(e => (
            <ListGroup.Item key={'entity_' + e.id} action as='div'>{e.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
