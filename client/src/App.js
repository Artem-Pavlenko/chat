import React, {useReducer, useEffect} from "react"
import './App.scss'
import {Join} from "./components/Join/Join"
import {isJoined, stateReducer} from "./state/Reducer"
import io from "socket.io-client"


// 1:38

const App = () => {

    const [state, dispatch] = useReducer(stateReducer, {
        joined: false,
        roomId: null,
        userName: null
    })

    const onLogin = (data) => {
        dispatch(isJoined(data))
        io().emit('ROOM:JOIN', data)
    }

    useEffect( () => {
        io().on('ROOM:JOINED', (users) => {
            console.log('new users:', users)
        })
    }, [])

    return (
        <div className="App">
            {state.isAuth
                ? <div>login success</div>
                : <Join onLogin={onLogin}/>
            }
        </div>
    )
}

export default App
