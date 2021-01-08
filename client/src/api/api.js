import axios from 'axios'

export const chat = {
    connect: (room, name) => {
        return axios.post('/rooms', {room, name})
    }
}