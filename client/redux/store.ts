import { createStore, applyMiddleware, compose, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer';

export const history = createBrowserHistory()
const composeEnhancer = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const saga = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        createRootReducer(history),
        composeEnhancer(applyMiddleware(routerMiddleware(history), logger, thunk))) as Store
    // saga.run()
    return store
}
export default configureStore