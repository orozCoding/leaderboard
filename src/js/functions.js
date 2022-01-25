import html from './html';

const displayHtml = () => {
  const body = document.getElementById('body');
  body.innerHTML = html;
};

export default displayHtml;