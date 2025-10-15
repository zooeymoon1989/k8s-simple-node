const express = require('express')
const app = express()
const port = 3000
const os = require('os')

app.get('/', function (req, res) {
    const ipAddress = req.socket.remoteAddress;
    res.send("hello from node , the host address is:"+ ipAddress + ", and the hostname is:"+os.hostname())
})

app.get('/ping', function (req, res) {
    res.send("pong")
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
})