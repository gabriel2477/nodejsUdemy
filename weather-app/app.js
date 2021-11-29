const request = require('postman-request')

const urlWeather = 'http://api.weatherstack.com/current?access_key=3c59f916cfe35ce52716359d524f2a33&query=Posadas,%20Misiones,%20Argentina'

request({url: urlWeather, json: true},(error,response,body)=>{
    const data = response.body
    console.log('En '+ data.location.name + ' hace ' + data.current.temperature + '. Con una humedad de ' + data.current.humidity)
})