import { html } from './html.js';

const displayHtml = () => {
  const body = document.getElementById('body');
  body.innerHTML = html;
};

export { displayHtml };