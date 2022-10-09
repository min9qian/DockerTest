
const path = require('path')

const express = require('express');

const app = express()

app.get('/user', (req, res) => {
    console.log("123");
})

app.get('/', (req, res) => {
    console.log("456");
})


app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})