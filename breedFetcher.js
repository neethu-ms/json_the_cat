const request = require('request');
const breedFetcher = function(name) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {

    const data = JSON.parse(body);
    
   
    if (!error && response.statusCode === 200 && (body !== '{}' && body !== '[]')) {
      console.log(data[0].description);
    } else if (body === '[]') {
      console.log("Data Not Found");
    } else if (body === '{}') {
      console.log("Invalid path");
    } else {
      console.log(error);
    }
  });
};

breedFetcher(process.argv[2]);