// LIBS
import { useEffect, useContext } from 'react'

// JS
import { userContext } from 'js/context'

// ASSETS
import logoutImg from 'assets/img/logout-img.PNG'
import logoutMobile from 'assets/img/logout-mobile.svg'

const Logout = () => {

  const { dispatch } = useContext(userContext)

  useEffect(() => {
    if (window.innerWidth > 768) setTimeout(() => dispatch({ type: 'LOGOUT' }), 3000)
  }, [dispatch])

  const logout = e => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      <div className='logout'>
        <img src={ logoutImg } alt='logout' />
        <p className='gray-text'>Sesión cerrada</p>
        <p className='orange-text'>Te extrañamos vuelve pronto</p>
      </div>
      <div className='logout-mobile'>
        <img src={ logoutMobile } alt='logout' />
        <p>¿Estás seguro de cerrar tu sesión actual?</p>
        <button 
          className='btn btn-gradient'
          onClick={ e => logout(e) }>
          si, cerrar sesión
        </button>
      </div>
    </>
  )
}

export default Logout