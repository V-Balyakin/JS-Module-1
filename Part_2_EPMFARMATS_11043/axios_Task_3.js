// запрос на 'Beth Smth', id - 4
const axios = require('axios').default,
  fs = require('fs'),
  pathtoOutputFile = 'rickAndMortyHeroes.txt';
axios({
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/4',
  })
  .then(response => {
    fs.writeFileSync(pathtoOutputFile,
      `${JSON.stringify(response.data.name)}
${JSON.stringify(response.data.species)}
${JSON.stringify(response.data.location.name)}
${JSON.stringify(response.data.gender)}`);
  })
  .catch(error => console.log(error));