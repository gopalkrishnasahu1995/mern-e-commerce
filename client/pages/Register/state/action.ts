import { createAction } from 'redux-actions'
import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from './constant'

export const getUser: any = createAction(GET_USER)
export const getUserSuccess: any = createAction(GET_USER_SUCCESS)
export const getUserFail: any = createAction(GET_USER_FAIL)





