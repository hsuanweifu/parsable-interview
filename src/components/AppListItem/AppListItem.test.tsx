import React from 'react';
import ReactDOM from 'react-dom';
import AppListItem from './AppListItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});