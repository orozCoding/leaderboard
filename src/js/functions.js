import main from './html';
import scores from './newGame';

const displayHtml = () => {
  const mainDom = document.getElementById('main');
  mainDom.innerHTML = main;
};

const fetchScores = () => {
  const data = fetch(scores)
    .then((response) => response.json())
    .then((data) => data.result);
  return data;
};

const getScores = async () => {
  const result = fetchScores();
  const scores = await result;
  return scores;
};

const addScore = async (name, score) => {
  fetch(scores, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: Number(score),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

const createLi = (player) => {
  const ul = document.getElementById('scores-board');
  const li = document.createElement('li');
  li.innerHTML = `${player.user}: ${player.score}`;
  ul.appendChild(li);
};

const clearList = () => {
  const scores = document.querySelectorAll('ul li');
  scores.forEach((score) => score.remove());
};

const renderBoard = async () => {
  clearList();
  const scores = await getScores();
  scores.forEach((score) => {
    createLi(score);
  });
};

const formEventListener = () => {
  const form = document.getElementById('user-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.name.value !== '' && form.score.value !== '') {
      addScore(form.name.value, form.score.value);
      form.reset();
    }
  });
};

const refreshButton = () => {
  clearList();
  const btn = document.getElementById('title-left-button');
  btn.addEventListener('click', () => {
    renderBoard();
  });
};

const addEventListeners = () => {
  formEventListener();
  refreshButton();
};

export {
  displayHtml, getScores, renderBoard, addEventListeners,
};