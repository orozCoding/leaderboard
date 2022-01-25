const newGame = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Orozco Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nCjnowlnMMaag99MO8MK/scores';

export default scores;