import React, {useState} from "react"
import io from 'socket.io-client'
import './App.css'

// const socket = io('http://localhost:9999/')

const App = () => {

    const connectSocket = () => {
        io('http://localhost:9999/')
    }

    const [value, setValue] = useState('')

    return (
        <div className="App">
            <button onClick={connectSocket}>C O N N E C T</button>
            <div>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder={'Room (ID)'}/>
            </div>
        </div>
    )
}

export default App
