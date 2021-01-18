import React from 'react';
import ReactDOM from 'react-dom';
import AppListGroup from './AppListGroup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppListGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});