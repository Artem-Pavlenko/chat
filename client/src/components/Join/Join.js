import React, {useState} from 'react'
import s from './Join.module.scss'
import {chat} from "../../api/api";

export const Join = ({onLogin}) => {

    const [roomValue, setRoomValue] = useState('')
    const [nameValue, setNameValue] = useState('')

    const onConnect = () => {
        if (roomValue && nameValue) {
            chat.connect(roomValue, nameValue).then(() => {
                onLogin()
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

                <button onClick={onConnect}>Enter</button>
            </div>
        </div>
    )
}