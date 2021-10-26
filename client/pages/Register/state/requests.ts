import { put, all, takeLatest } from 'redux-saga/effects'
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from './constant'
import axios from '../../../config/axios.config'
import * as actions from './action'

const Prefix = '/users'
export const getUser = () => axios.get(Prefix + '/1').then(res => {
    if(res){
        const data = res.data
    }
})



// async function* users() {
//     try {
//         const user = yield getUser();
//         yield put(actions.getUser(user.data))
//     } catch (error) {
//         yield put(actions.getUserFail(error))
//     }
// }

// export default function* () {
//     yield all([
//         takeLatest(GET_USER, users)
//     ])
// }