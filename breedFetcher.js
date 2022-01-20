const request = require("request");

const userInput = process.argv.slice(2);
const requestUrl =
  "https://api.thecatapi.com/v1/breeds/search?q=" + userInput[0];
// console.log(requestUrl);

const fetchBreedDescription = () => {
  request(requestUrl, (error, response, body) => {
    if (error) {
      console.log(error);
      return error;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found");
      return;
    }
    const description = data[0].description;
    console.log(description);
    console.log(typeof data);
  });
};
