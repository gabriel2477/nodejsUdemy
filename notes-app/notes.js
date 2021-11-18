const fs = require('fs')

const getNotes = function(a,b){
    console.log('Giving your notes..');
    return a+b;
}

const addNote = function (title, body) {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNote(notes)

    console.log(notes)
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
module.exports = {
    addNote: addNote,
    getNotes: getNotes
}