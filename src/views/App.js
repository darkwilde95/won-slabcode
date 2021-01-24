// LIBS
import { useReducer } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CustomRoute from 'views/utils/CustomRoute'

// COMPONENTS
import SignIn from 'views/pages/SignIn'
import Dashboard from 'views/layouts/Dashboard'

// JS
import { userContext } from 'js/context'
import { userReducer } from 'js/reducer'


const App = () => {

  document.title = 'Won'

  const [state, dispatch] = useReducer(userReducer, { user: !!localStorage.getItem('token') })

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <CustomRoute path='/login' redirectTo='/dashboard' requireUser={ false }>
          <SignIn />
        </CustomRoute>
        <CustomRoute path='/dashboard' redirectTo='/login' requireUser={ true }>
          <Dashboard />
        </CustomRoute>
      </Switch>
    </userContext.Provider>
  )
}

export default App