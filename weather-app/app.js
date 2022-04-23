const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}

geocode('New York',(error, data)=>{

    console.log('Error',error)
    console.log('Data', data)
    
    forecast(data.latitude, data.longitude, (error, data)=>{

        console.log('Error',error)
        console.log('Data', data)

    })
})
// callback chaining used.  i/o is asyncrhnous