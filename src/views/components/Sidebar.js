// LIBS
import { Link } from 'react-router-dom'

// ASSETS
import logo from 'assets/img/won-logo.svg'
import officeIcon from 'assets/img/office-icon.svg'
import catalogIcon from 'assets/img/catalog-icon.svg'
import bonusIcon from 'assets/img/bonus-icon.svg'
import networkIcon from 'assets/img/network-icon.svg'
import inviteIcon from 'assets/img/invite-icon.svg'
import wonpurseIcon from 'assets/img/wonpurse-icon.svg'
import notificationsIcon from 'assets/img/notifications-icon.svg'
import resourcesIcon from 'assets/img/resources-icon.svg'
import legalIcon from 'assets/img/legal-icon.svg'
import tellusIcon from 'assets/img/tellus-icon.svg'
import historyIcon from 'assets/img/history-icon.svg'
import logoutIcon from 'assets/img/logout-icon.svg'

const Sidebar = ({ route, toogle, setToogle }) => {

  const option = {
    'oficina' : false,
    'catalogo' : false,
    'bonos' : false,
    'red' : false,
    'invitar' : false,
    'wonedero' : false,
    'notificaciones' : false,
    'recursos' : false,
    'legal' : false,
    'cuentanos' : false,
    'historial' : false,
    'cerrar-sesion' : false
  }

  option[route] = true

  return (
    <div className={ `sidebar for-mobile ${ toogle ? 'show' : '' }` }>
      <img src={ logo } className='sidebar-logo' alt='won-logo' />
      <div className='options-container'>
        <Link 
          to='/dashboard/oficina' 
          className={`sidebar-option ${ option['oficina'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ officeIcon } alt='office-icon' />
          Oficina
        </Link>
        <Link 
          to='/dashboard/catalogo' 
          className={`sidebar-option ${ option['catalogo'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ catalogIcon } alt='office-icon' />
          Catálogo
        </Link>
        <Link 
          to='/dashboard/bonos' 
          className={`sidebar-option ${ option['bonos'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ bonusIcon } alt='office-icon' />
          Bonos
        </Link>
        <Link 
          to='/dashboard/red' 
          className={`sidebar-option ${ option['red'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ networkIcon } alt='office-icon' />
          Red
        </Link>
        <Link 
          to='/dashboard/invitar' 
          className={`sidebar-option ${ option['invitar'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ inviteIcon } alt='office-icon' />
          Invitar
        </Link>
        <Link 
          to='/dashboard/wonedero' 
          className={`sidebar-option ${ option['wonedero'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ wonpurseIcon } alt='office-icon' />
          Wonedero
        </Link>
        <Link 
          to='/dashboard/notificaciones' 
          className={`sidebar-option ${ option['notificaciones'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ notificationsIcon } alt='office-icon' />
          Notificaciones
        </Link>
        <Link 
          to='/dashboard/recursos' 
          className={`sidebar-option ${ option['recursos'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ resourcesIcon } alt='office-icon' />
          Recursos
        </Link>
        <Link 
          to='/dashboard/legal' 
          className={`sidebar-option ${ option['legal'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ legalIcon } alt='office-icon' />
          Legal
        </Link>
        <Link 
          to='/dashboard/cuentanos' 
          className={`sidebar-option ${ option['cuentanos'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ tellusIcon } alt='office-icon' />
          Cuéntanos
        </Link>
        <Link 
          to='/dashboard/historial' 
          className={`sidebar-option ${ option['historial'] ? 'selected' : '' }`} 
          onClick={ () => setToogle(false) }>
          <img src={ historyIcon } alt='office-icon' />
          Historial
        </Link>
        <Link 
          to='/dashboard/cerrar-sesion'
          className='sidebar-option'
          onClick={ () => setToogle(false) } >
          <img src={ logoutIcon } alt='office-icon' />
          Cerrar sesión 
        </Link>
      </div>
    </div>
  )
}

export default Sidebar