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

    console.log('/post rooms:', [...rooms.keys()])
    res.send()
})

io.on('connection', (socket) => {

    socket.on('ROOM:JOIN', ({roomId, userName}) => {
        console.log('(socket) user data:', {roomId, userName})
        socket.join(roomId)
        // сохраняем в определённой комнате пользователя, который зашёл
        rooms.get(roomId).get('users').set(socket.id, userName)

        const users = [...rooms.get(roomId).get('users').values()]

        socket.to(roomId).broadcast.emit('ROOM:JOINED', users)
        // socket.broadcast.to(roomId).emit('ROOM:JOINED', users)
    })

    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} (socket) user connected:`, socket.id)
})

server.listen(port, (error) => {
    if (error) {
        throw Error(error)
    }
    console.log('server was started on:', port)
})