import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import registerReducer from '../pages/Register/state/registerReducer';

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    register: registerReducer
})
export default createRootReducer