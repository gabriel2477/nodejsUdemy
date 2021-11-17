const fs = require('fs');
const notes = require('./notes.js');
const chalk = require('chalk');

fs.writeFileSync('notes.txt','Hello this is my first document writen with NodeJs');
fs.appendFileSync('notes.txt','I live in Posadas'); //Para agregar otro mensaje al documento anterior.

//segundo desafio
//Agregue require('./notes.js')

const sum = notes(4,7);
console.log(sum);
console.log(chalk.blue(sum))
console.log(chalk.underline.bold(sum))
console.log(chalk.bgGreen(sum))