import {JOINED} from "./type";

export const stateReducer = (state, action) => {
    switch (action.type) {
        case JOINED:
            return {
                ...state, isAuth: true, ...action.payload
            }
        default:
            return state
    }
}

export const isJoined = (data) => ({type: JOINED, payload: data})