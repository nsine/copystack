import React from 'react';
import ReactDOM from 'react-dom';

window.addEventListener('load', () => {
  const codeDiv = document.querySelectorAll('.prettyprint.prettyprinted');
  codeDiv.forEach(node => {
    node.style.display = 'none';
  });
});
