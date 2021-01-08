const express = require('express')


const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})


const port = 9999
const rooms = new Map()


app.use(express.json())

app.get('/rooms', (req, res) => {

    res.json(rooms)
})

app.post('/rooms', (req, res) => {


    const {room, name} = req.body
    if (!rooms.has(room)) {
        rooms.set(room, new Map([
            ['users', new Map()],
            ['messages', []]
        ]))
    }

    console.log('rooms:', [...rooms.keys()])
    res.send()
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