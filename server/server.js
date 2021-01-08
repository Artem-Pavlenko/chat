const express = require('express')


const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

const port = 9999
const rooms = new Map()

app.get('/rooms', (req, res) => {

    res.json(rooms)
})


io.on('connection', socket => {

    console.log('(socket) user connected:', socket.id)

})

server.listen(port, (error) => {
    if (error) {
        throw Error(error)
    }
    console.log('server was started on:', port)
})