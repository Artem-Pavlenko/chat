import React, {useState} from 'react'
import s from './Join.module.scss'

export const Join = () => {

    const [value, setValue] = useState({
        room: '',
        name: ''
    })

    return (
        <div className={s.JoinBlock}>
            <div className={s.fields}>
                <input
                    type="text"
                    value={value.room}
                    onChange={e => setValue({...value, room: e.target.value})}
                    placeholder={'Room (ID)'}
                />
                <input
                    type="text"
                    value={value.name}
                    onChange={e => setValue({...value, name: e.target.value})}
                    placeholder={'Name'}
                />

                <button>Enter</button>
            </div>
        </div>
    )
}