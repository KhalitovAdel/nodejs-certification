'use strict'
const express = require('express')
const indexRouter = require('./routes');

const app = express()

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).end();
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send(err.message)
})

module.exports = app
