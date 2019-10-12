import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RootApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
