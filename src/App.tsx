import React, { PureComponent } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppListGroup from './components/AppListGroup/AppListGroup';

const TARGET = 'axross';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <AppListGroup username={TARGET}></AppListGroup>
      </div>
    );
  }
}
