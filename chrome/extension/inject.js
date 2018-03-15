import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import CopyButton from '../../app/components/CopyButton';
import createStore from '../../app/configureStore';
import * as actions from '../../app/actions';

const CODE_SELECTOR = '.prettyprint.prettyprinted';

const CopyButtonInjected = styled(CopyButton)`
  min-height: unset;
  padding: 5px 7px;
  border-radius: 0;
`;

function patchCodeElementStyles(node) {
  node.style.position = 'relative';
}

function createButtonDiv() {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.top = '0';
  div.style.right = '0';

  return div;
}

const makeHandleCopy = (store) => (text) => {
  const pageName = document.title.replace('- Stack Overflow', '').trim();

  store.dispatch(actions.addSnippet({
    pageName,
    url: document.URL,
    text: text,
  }));
};

const getStore = () => new Promise((resolve) => {
  chrome.storage.local.get('state', (obj) => {
    const { state } = obj;

    const store = state ?
      createStore(JSON.parse(state)) :
      createStore();

    resolve(store);
  });
});

getStore()
  .then(store => {
    const handleCopy = makeHandleCopy(store);

    window.addEventListener('load', () => {
      const codeElements = document.querySelectorAll(CODE_SELECTOR);
      codeElements.forEach(node => {
        patchCodeElementStyles(node);
        const buttonDiv = createButtonDiv();
        node.appendChild(buttonDiv);

        const textToCopy = node.innerText;

        const button = (
          <CopyButtonInjected text={textToCopy} onCopy={() => handleCopy(textToCopy)}/>
        );

        ReactDOM.render(button, buttonDiv);
      });
    });
  });
