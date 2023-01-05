const express = require('express')
const app = express()
const os = require('os')

app.get('/', function (req, res) {
    const ipAddress = req.socket.remoteAddress;
    res.send("hello from node , the host address is:"+ ipAddress + ", and the hostname is:"+os.hostname())
})

app.get('/ping', function (req, res) {
    res.send("pong")
})

app.listen(3000)