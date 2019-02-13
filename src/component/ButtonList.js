import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class ButtonList extends React.Component {

  render() {
    return (
      <div>
        <Alert variant="light">Click all buttons in any order</Alert>

        <ButtonToolbar className="mb-3">
          <Button variant="info" onClick={this.props.clickButton1}>
            Button 1
          </Button>
          <Button variant="info" className="ml-3" onClick={this.props.clickButton2}>
            Button 2
          </Button>
          <Button variant="info" className="ml-3"  onClick={this.props.clickButton3}>
            Button 3
          </Button>
        </ButtonToolbar>

        {this.props.allButtonsClicked &&
          <Alert variant="success">You have clicked all buttons!</Alert>
        }
      </div>
    );
  }
}
