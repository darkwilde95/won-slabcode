// LIBS
import { useState } from 'react'

// ASSETS
import wonpurseIcon from 'assets/img/wonpurse-icon.svg'
import searchIcon from 'assets/img/search-icon.svg'
import actionButton from 'assets/img/action-button.svg'

const CatalogNavbar = ({ selected, setSelected }) => {

  const [left, setLeft] = useState(true)

  const option = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  }

  option[selected] = true

  const changePos = e => {
    setLeft(!left)
  }

  return (
    <nav className={ `navbar ${ left ? 'begin' : 'end' }` }>
      <div 
        className={ `left-button ${ left ? '' : 'show' }` }
        onClick={ e => changePos(e) } >
        <img src={ actionButton } alt='left' />
      </div>
      <div 
        className={ `right-button ${ left ? 'show' : '' }` }
        onClick={ e => changePos(e) }>
        <img src={ actionButton } alt='right' />
      </div>
      <ul className='filters'>
        <li 
          className={`nav-item ${ option[0] ? 'selected' : '' }`}
          onClick={ () => setSelected(0) }
          style={{ 'minWidth': '50px' }} >
          top 10
        </li>
        <li 
          className={`nav-item ${ option[1] ? 'selected' : '' }`}
          onClick={ () => setSelected(1) } >
          apps
        </li>
        <li 
          className={`nav-item ${ option[2] ? 'selected' : '' }`}
          onClick={ () => setSelected(2) } >
          bonos
        </li>
        <li 
          className={`nav-item ${ option[3] ? 'selected' : '' }`}
          onClick={ () => setSelected(3) } >
          paquetes
        </li>
        <li 
          className={`nav-item ${ option[4] ? 'selected' : '' }`}
          onClick={ () => setSelected(4) } >
          recargas
        </li>
      </ul>
      <div className='nav-right'>
        <button className='btn btn-wonpurse'>
          <img src={ wonpurseIcon } alt='wonpurse-icon' />
          $ 100.000
        </button>
        <img src={ searchIcon } alt='search-icon' />
      </div>
    </nav>
  )
}

export default CatalogNavbar