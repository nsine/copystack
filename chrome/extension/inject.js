import React from 'react';
import ReactDOM from 'react-dom';

import CopyButton from '../../app/components/CopyButton';

const CODE_SELECTOR = '.prettyprint.prettyprinted';

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

window.addEventListener('load', () => {
  const codeElements = document.querySelectorAll(CODE_SELECTOR);
  codeElements.forEach(node => {
    patchCodeElementStyles(node);
    const buttonDiv = createButtonDiv();
    node.appendChild(buttonDiv);

    const button = (
      <CopyButton text={node.innerText}/>
    );

    ReactDOM.render(button, buttonDiv);
  });
});
