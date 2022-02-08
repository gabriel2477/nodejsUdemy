const express = require('express');

const app = express();

//app.com
//app.com/help
//app.com/about

app.get('',(req, res) =>{
    res.send('Hello express!')
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})