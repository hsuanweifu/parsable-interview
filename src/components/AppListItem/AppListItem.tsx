import React, { PureComponent } from "react";
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AppListGroup from '../AppListGroup/AppListGroup';

export default class AppListItem extends PureComponent<{ username: string }, { load: boolean}> {
  state = {
    load: false,
  };

  handleClick = () => {
    this.setState({
      load: true
    });
  };

  render() {
    return (
      <ListGroup.Item>
        <div className="row mb-2">
          <div className="col-12">
            {this.props.username}
            {!this.state.load &&
               <Button size="sm"
                      variant="primary"
                      className="float-right"
                      onClick={this.handleClick}>Load</Button>}
          </div>
        </div>
        {this.state.load && <AppListGroup username={this.props.username}></AppListGroup>}
      </ListGroup.Item>
    );
  }
}
