const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(a,b){
    console.log('Giving your notes..');
    return a+b;
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNote(notes)
    
        console.log(notes)
    } else {
        console.log('Note title ya existe')
    }
    
}

const saveNote = function (notes) {
    const dataToJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataToJSON)
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)

        return data
    } catch (e) {
        return []
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNote(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}