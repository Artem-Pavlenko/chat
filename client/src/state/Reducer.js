import {IS_AUTH} from "./type";

export const stateReducer = (state, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state, isAuth: action.payload
            }

        default:
            return state
    }
}

export const isAuth = (isAuth) => ({type: IS_AUTH, payload: isAuth})