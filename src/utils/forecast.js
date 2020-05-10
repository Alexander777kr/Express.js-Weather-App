const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1e7b4009e73df19cf56fbf3fbcfd3288&query=" +
    latitude +
    "," +
    longitude +
    //    "&units=f"
    "";

  request({ url, json: true }, (error, { body }) => {
    const { location, current } = body;
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (location.name === null) {
      callback("Unable to find location");
    } else {
      //  const current = response.body.current;
      callback(
        undefined,
        `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out. The humidity is ${current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
