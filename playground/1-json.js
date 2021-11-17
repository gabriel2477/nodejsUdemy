const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON  = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.name)

data.name = "Gabriel Alejandro"
data.age = "31"

const dataToJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataToJSON)
