import { IRegister } from './types'
import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from './constant'
import { actionTypes } from '../types'
import Register from '../models/registerModel'

export interface State {
    register: Register
}

interface IAction {
    type: actionTypes;
    payload?: Register;
}

export const initState: IRegister = {
    isLoading: false,
    user: [],
    error: null
}

const registerReducer = (state = initState, action: IAction) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                isLoading: true,
                user: action.payload,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        case GET_USER_FAIL:
            return {
                ...state,
                isLoading: true,
                error: action.payload,
            }
        default:
            return state
    }

}
export default registerReducer