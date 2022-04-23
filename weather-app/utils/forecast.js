const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={bc4738c62f0e0e8e8ef2eccf95e80820}'
    
    // 'https://api.weatherstack.com/current?access_key=b6bacef346cd622e8cdaec98047052d0&query=' + latitude + ',' + longitude + '&units=f'

    
    //old : 357fab68144e91fc856dd77bd0af1053
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.main.temperature + ' degress out. There is a ' + response.body.main.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast