const express = require('express')
const os = require('os')
const app = express()

app.get('/', function (req, res) {
    res.send("hello from node , the hostname is:"+os.hostname())
})

app.listen(3000)