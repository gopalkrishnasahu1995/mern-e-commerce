import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Register = lazy(() => import('./pages/Register'))
const HomePage = lazy(() => import('./pages/HomePage'))

export const App = () => {
  return (
    <Suspense fallback={() => 'loading'}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Suspense>
  )
}

export default App
