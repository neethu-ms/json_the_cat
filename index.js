const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

let result = fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return error;
  } else {
    return desc;
  }
});



console.log(result);