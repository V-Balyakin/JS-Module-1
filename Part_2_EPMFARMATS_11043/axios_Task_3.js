// запрос на 'Secretary of the Interior', id - 493
const axios = require('axios').default;
const fs = require('fs');
axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/493',
  })
  .then(response => {
    fs.writeFileSync('rickAndMortyHeroes.txt',
   `${JSON.stringify(response.data.name)}
${JSON.stringify(response.data.species)}
${JSON.stringify(response.data.location.name)}
${JSON.stringify(response.data.gender)}`);
  });
  