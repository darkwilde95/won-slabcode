// LIBS
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// JS
import { userContext } from 'js/context'
import { post } from 'js/request'

// ASSETS
import logo from 'assets/img/won-logo.svg'
import logoMobile from 'assets/img/wonlogo-mobile.svg'

const SignIn = () => {
  const { dispatch } = useContext(userContext)
  const [incorrect, showIncorrect] = useState(false)
  const login = e => {
    e.preventDefault()
    const body = {
      authentication: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        type: 'User'
      }
    }
    post('/login', body).then(
      res => {
        const token = res.data.data.token
        dispatch({ type: 'LOGIN', token })
      }
    ).catch(
      err => {
        console.log(`status: ${ err.response.status }`)
        if (err.response.status === 401) showIncorrect(true)
      }
    )
  }
  
  return (
    <div className='background'>
      <img src={ logo } alt='won-logo' className='won-logo' />
      <div className='login-panel'>
        <img src={ logoMobile } alt='wonlogo-mobile' className='wonlogo-mobile' />
        <h5 className='signin-title'>Iniciar sesión</h5> 
        <form onSubmit={ e => login(e) }>
          <input type='email' id='email' placeholder='Correo electrónico'/>
          <input type='password' id='password' placeholder='Contraseña'/>
          <Link to='#!' className='forgot-pass-link'>Olvidé la contraseña</Link>
          <button 
            type='submit' 
            className={`btn btn-gradient btn-signin ${ incorrect ? '' : 'mb-1' }`}>Ingresar</button>
          { incorrect && <small className='incorrect-pass'>Contraseña incorrecta</small> }
        </form>
        <hr />
        <button className='btn btn-create'>Crear cuenta</button>
      </div>
    </div>
  )
}

export default SignIn