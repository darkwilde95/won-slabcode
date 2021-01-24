// LIBS
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom'

// COMPONENTS
import Sidebar from 'views/components/Sidebar'
import Catalog from 'views/pages/Catalog'
import Logout from 'views/pages/Logout'

// ASSETS
import toogleIcon from 'assets/img/toogle-icon.svg'
import toogleIcon2 from 'assets/img/toogle-icon2.svg'
import { useState } from 'react'

const Dashboard = () => {

  const match = useRouteMatch('/dashboard/:option')
  const [toogle, setToogle] = useState(false)

  return (
    <>
      <Sidebar 
        route={ match ? match.params.option : {} } 
        toogle={ toogle }
        setToogle={ setToogle } />
      <div className='nav-sidebar'>
        <img 
          src={ toogle ? toogleIcon : toogleIcon2 } alt='toogle-icon' 
          className='toogle-icon'
          onClick={ () => setToogle(!toogle) } />
      </div>
      <div className={ `overlay ${ toogle ? 'show' : '' }` }></div>
      <div className='content'>
        <Switch>
          <Route exact path='/dashboard'>
            <Redirect to='/dashboard/catalogo' />
          </Route>
          <Route exact path='/dashboard/oficina' />
          <Route exact path='/dashboard/catalogo'>
            <Catalog toogle={ toogle } />
          </Route>
          <Route exact path='/dashboard/bonos' />
          <Route exact path='/dashboard/red' />
          <Route exact path='/dashboard/invitar' />
          <Route exact path='/dashboard/wonedero' />
          <Route exact path='/dashboard/notificaciones' />
          <Route exact path='/dashboard/recursos' />
          <Route exact path='/dashboard/legal' />
          <Route exact path='/dashboard/cuentanos' />
          <Route exact path='/dashboard/historial' />
          <Route exact path='/dashboard/cerrar-sesion' >
            <Logout />
          </Route>
        </Switch>
      </div> 
    </>
  )
}

export default Dashboard