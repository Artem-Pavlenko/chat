import React, {useState} from 'react'
import s from './Join.module.scss'
import {chatAPI} from "../../api/api";

export const Join = ({onLogin}) => {

    const [roomValue, setRoomValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [loading, setLoading] = useState(false)

    const onConnect = () => {
        setLoading(true)
        if (roomValue && nameValue) {
            chatAPI.connect(roomValue, nameValue).then(() => {
                onLogin({roomId: roomValue, userName: nameValue})
            })
        }
    }

    return (
        <div className={s.JoinBlock}>
            <div className={s.fields}>
                <input
                    type="text"
                    value={roomValue}
                    onChange={e => setRoomValue(e.currentTarget.value)}
                    placeholder={'Room (ID)'}
                />
                <input
                    type="text"
                    value={nameValue}
                    onChange={e => setNameValue(e.currentTarget.value)}
                    placeholder={'Name'}
                />

                <button disabled={loading} onClick={onConnect}>{loading ? 'entrance...': 'enter'}</button>
            </div>
        </div>
    )
}