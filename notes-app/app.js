const fs = require('fs');
const notes = require('./notes.js');
fs.writeFileSync('notes.txt','Hello this is my first document writen with NodeJs');
fs.appendFileSync('notes.txt','I live in Posadas'); //Para agregar otro mensaje al documento anterior.

//segundo desafio
//Agregue require('./notes.js')

const sum = notes(4,7);
console.log(sum);
