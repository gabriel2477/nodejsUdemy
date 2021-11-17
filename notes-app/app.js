const fs = require('fs');

fs.writeFileSync('notes.txt','Hello this is my first document writen with NodeJs');
fs.appendFileSync('notes.txt','I live in Posadas'); //Para agregar otro mensaje al documento anterior.