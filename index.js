const express = require('express');

const app = express();

app.use('/', (req,res) => {
    res.send('hello word')
})

app.listen(5000, () => {
    console.log('sever in 5000')
})