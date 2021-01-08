import React, {useReducer} from "react"
import './App.scss'
import {Join} from "./components/Join/Join";
import {isAuth, stateReducer} from "./state/Reducer";


const App = () => {

    const [state, dispatch] = useReducer(stateReducer, {
        isAuth: false
    })

    const onLogin = () => {
        dispatch(isAuth(true))
    }

    return (
        <div className="App">
            {state.isAuth
                ? <div>login</div>
                : <Join onLogin={onLogin}/>
            }
        </div>
    )
}

export default App
