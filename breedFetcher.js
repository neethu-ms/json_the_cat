const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error,null);
    } else if (!error && response.statusCode === 200 && body !== '[]' && body !== '{}') {
      const data = JSON.parse(body);
      callback(null,data[0].description.trim());
    } else {
      callback(null,null);
    }
    
  });

};


module.exports = {
  fetchBreedDescription
};