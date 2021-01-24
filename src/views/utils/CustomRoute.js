// LIBS
import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

// JS
import { userContext } from 'js/context'

const CustomRoute = ({ requireUser, path, redirectTo, children }) => {

  const { state } = useContext(userContext)
  
  const result = requireUser ? (
    state.user ? children : <Redirect to={ redirectTo } />
  ) : (
    state.user ? <Redirect to={ redirectTo } /> : children
  )

  return <Route path={ path }>{ result }</Route>
}

export default CustomRoute