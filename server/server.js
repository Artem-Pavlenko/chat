const express = require('express')

const app = express()

const rooms = new Map([
    ['rooms' , []],
    ['messages', []]
])

app.get('/rooms', (req, res) => {



    res.json(rooms)
})

app.listen(9999, (error) => {
    if (error) {
        throw Error(error)
    }
    console.log('server was started on post 9999')
})