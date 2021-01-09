import React, {useReducer} from "react"
import './App.scss'
import {Join} from "./components/Join/Join"
import {isJoined, stateReducer} from "./state/Reducer"
import io from "socket.io-client"


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

    console.log(state)

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
