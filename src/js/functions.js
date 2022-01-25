import main from './html';

const displayHtml = () => {
  const mainDom = document.getElementById('main');
  mainDom.innerHTML = main;
};

export default displayHtml;