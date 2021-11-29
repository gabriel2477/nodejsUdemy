const request = require('postman-request')

// const urlWeather = 'http://api.weatherstack.com/current?access_key=3c59f916cfe35ce52716359d524f2a33&query=Posadas,%20Misiones,%20Argentina'

// request({url: urlWeather, json: true},(error, response, body)=>{
//     const data = response.body
//     console.log('En '+ data.location.name + ' hace ' + data.current.temperature + '. Con una humedad de ' + data.current.humidity)
// })


// Geocoding
// Address -> Lat/Long -> Weather


const urlGeoLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Posadas.json?access_token=pk.eyJ1IjoiZ2FicmllbDI0NzciLCJhIjoiY2t3a3FmcXFhMXV5bDJ1cGF0bnA1ODlyMCJ9.VJ9xanD1n2gHfFUvPZuQPw&limit=1'

request({url: urlGeoLocation, json:true}, (error, response, body) => {
    
    if(error){
        console.log('Unable to conect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('La longitud de Posadas es ' + longitude + '. Y su latitud es ' + latitude)
    }

    
})