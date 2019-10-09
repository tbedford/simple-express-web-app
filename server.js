"use strict";

const express = require('express')
const bodyParser = require("body-parser");                                                                                                                                       const app = express()
const port = 9000


app.set('view engine', 'pug');
app.use(bodyParser.json());                                                                                                                                                      app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user', function (req, res) {
  res.render('user', { title: 'Create User', message: 'Create User' })
})

app.post('/user', function (req, res) {
    console.log(req.body)
    res.send(req.body)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
