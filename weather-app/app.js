const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(!location){
    console.log("Please provide location");
}else{
    geocode(location, (error, { latitude, longitude, location}) => {
        if(error){
            return console.log(error);
        }
    
        
    forecast(latitude,longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}





// done similar thing in forecast utils
// const url = 'http://api.weatherstack.com/current?access_key=2faf2eb2f15c03d6e0169d288831bcd4&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {

//     if(error){
//         console.log(chalk.red.inverse("Unable to find weather service!"));
//     } else if(response.body.error){
//         console.log(chalk.red.inverse("Unable to find the location!"));
//     } else{
//     // console.log(response.body.current);
//     console.log(`${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degrees out.It feels like ${response.body.current.feelslike} degrees out.`);   
//     }
// })

// done dimilar thing with the help of a callback and a function in utils.geocode.js
// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoic29uaXlhc2giLCJhIjoiY2tyYWY0ZjA1M2tmczJwczZjbnBpNWJ4ZyJ9.gIYbNvoIhW4uU4k1QIgNHA&limit=1"

// request({url: geocodeUrl, json: true}, (error, response) => {
//     if(error){
//     console.log(chalk.red.inverse("Unable to connect location service!"));
//     } else if(response.body.features.length === 0) {
//         console.log(chalk.red.inverse("Unable to find location. Try another search!"));
//     } else{
//         console.log(`Latitude and longitude is ${response.body.features[0].center}`);
//     }
// })