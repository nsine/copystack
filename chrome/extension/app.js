import React from 'react';
import ReactDOM from 'react-dom';

import Root from '../../app/Root';
import createStore from '../../app/configureStore';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');


  ReactDOM.render(
    <Root store={createStore(initialState)}/>,
    document.querySelector('#root')
  );
});
