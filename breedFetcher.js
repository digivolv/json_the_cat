const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const requestUrl =
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(requestUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found");
      return;
    }
    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };
