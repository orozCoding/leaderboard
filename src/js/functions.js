import { header, main } from './html';

const displayHtml = () => {
  const headerDom = document.getElementById('header');
  headerDom.innerHTML = header;

  const mainDom = document.getElementById('main');
  mainDom.innerHTML = main;
};

export default displayHtml;