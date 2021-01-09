import axios from 'axios'

export const chatAPI = {
    connect: (room, name) => {
        return axios.post('/rooms', {room, name})
    }
}