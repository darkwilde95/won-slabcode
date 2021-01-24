// LIBS
import { auth_get } from 'js/request'
import { useEffect, useState } from 'react'

// ASSETS
import CatalogNavbar from 'views/components/CatalogNavbar'
import ProductCard from 'views/components/ProductCard'

const Catalog = ({ toogle }) => {

  const [selected, setSelected] = useState(0)
  const [data, setData] = useState({ data: [], loaded: false })

  useEffect(() => {
    const categories = {
      0: '/products/top',
      1: 'products/search?page=1&per_page=20&category=11',
      2: 'products/search?page=1&per_page=20&category=6',
      3: 'products/search?page=1&per_page=20&category=2',
      4: 'products/search?page=1&per_page=20&category=1'
    }
    setData({ data: [], loaded: false })
    auth_get(categories[selected]).then(
      res => {
        setData({ loaded: true, data: [...res.data.data] })
      }
    ).catch(
      err => {
        setData({ loaded: true, data: [] })
        console.log(err.response)
      }
    )
  }, [selected])

  return (
    <>
      <CatalogNavbar selected={ selected } setSelected={ setSelected } />
      <div className={ `catalog-content ${ toogle ? 'remove-overflow' : '' }`} >
        { !data.loaded && <div className='loading'>Cargando...</div> }
        { data.loaded && data.data.map((p, i) => (
          <ProductCard key={ i } product={ p } />
        ))
        }
      </div>
    </>
    
  )
}

export default Catalog