import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './redux/store'
import './assets/styles/styles.scss'

// window.store = store

ReactDOM.render(
  // <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  // </Provider>,
  ,
  document.getElementById('root') as HTMLElement
)
