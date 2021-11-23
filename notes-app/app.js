const fs = require('fs');
const note = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

fs.writeFileSync('notes.txt','Hello this is my first document writen with NodeJs');
fs.appendFileSync('notes.txt','I live in Posadas'); //Para agregar otro mensaje al documento anterior.

//segundo desafio
//Agregue require('./notes.js')

//const sum = notes(4,7);
//console.log(sum);
//console.log(chalk.blue(sum))
//console.log(chalk.underline.bold(sum))
//console.log(chalk.bgGreen(sum))

//Customize yargs version
yargs.version('1.1.0')

//Create methods add, remove, read, list

//Create add method
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        note.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        note.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing the note')
    }
})


console.log(yargs.argv)