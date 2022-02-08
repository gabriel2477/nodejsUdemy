const express = require('express');

const app = express();

//app.com
//app.com/help
//app.com/about

app.get('', (req, res) =>{
    res.send('Hello express!')
})

app.get('/help', (req, res) =>{
    res.send('<h1>Help Page! </h1>')
})

app.get('/about', (req, res) =>{
    res.send([{
        name: "Gabriel",
        age: 31
    },{
        name: "Amalia",
        age: 27
    }])
})

app.get('/weather', (req, res) =>{
    res.send('Weather page!')
})


app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})