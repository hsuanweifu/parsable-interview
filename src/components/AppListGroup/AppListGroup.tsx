import React, { PureComponent } from "react";
import { ListGroup } from 'react-bootstrap';
import AppListItem from '../AppListItem/AppListItem';
import { Octokit } from "@octokit/core";

export default class AppListGroup extends PureComponent<{ username: string }, { data: Array<string>, loading: boolean }> {
  octokit: Octokit  = new Octokit({ }); // Ideal: be in a singlton service
  state = {
    data: [],
    loading: true
  };

  constructor(props: any) {
    super(props);

    if (this.props.username) {
      this.asyncCall();
    }
  }

  render() {
    if (!this.state.data || !this.state.data.length) {
      return (<div>{this.state.loading ? 'Loading...' : '---N/A---'}</div>);
    }

    return (
      <ListGroup>
        {this.state.data.map((v: string) => (
          <AppListItem key={v}
                      username={v}/>
        ))}
      </ListGroup>
    );
  }

  // Ideal: be in a singlton service
  private async asyncCall() {
    try {
      const res = await this.octokit.request('GET /users/{username}/following', {
        username: this.props.username
      });

      this.setState({
        data: res.data.map((v) => (v ? v.login : '')),
        loading: false
      });
    } catch(e) {
      console.error(e);
    }
  }
}
