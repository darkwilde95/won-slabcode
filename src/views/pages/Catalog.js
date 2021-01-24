// LIBS
import { auth_get } from 'js/request'
import { useEffect, useRef, useState } from 'react'

// ASSETS
import CatalogNavbar from 'views/components/CatalogNavbar'
import ProductCard from 'views/components/ProductCard'
import InfiniteScroller from 'views/utils/InfiniteScroller'

const Catalog = ({ toogle }) => {

  const [selected, setSelected] = useState(0)
  const page = useRef(1)
  // const lastCategory = useRef(0)
  const [data, setData] = useState({ data: [], hasMore: true })

  useEffect(() => {
    page.current = 1
    setData({ data: [], hasMore: true })
  }, [selected])

  const searchRequest = setLoading => {
    if (selected === 0 && page.current >= 2) {
      setData({ ...data, hasMore: false }) 
    } else {
      const categories = {
        0: '/products/top',
        1: `products/search?page=${page.current}&per_page=10&category=11`,
        2: `products/search?page=${page.current}&per_page=10&category=6`,
        3: `products/search?page=${page.current}&per_page=10&category=2`,
        4: `products/search?page=${page.current}&per_page=10&category=1`
      }
      page.current++
      setLoading(true)
      auth_get(categories[selected]).then(
        res => {
          setLoading(false)
          const update = { 
            data: [...data.data, ...res.data.data],
            hasMore: selected !== 0 ? res.data.meta.next_page !== null : false
          }
          setData(update)
        }
      ).catch(
        err => {
          setData({ data: [], hasMore: false })
          console.log(err)
          console.log(err.response)
        }
      )
    }
  }

  return (
    <>
      <CatalogNavbar selected={ selected } setSelected={ setSelected } />
      <InfiniteScroller
        hasMore={ data.hasMore }
        containerClass={ `catalog-content ${ toogle ? 'remove-overflow' : '' }`}
        update={ setLoading => searchRequest(setLoading) } >
        { data.data.map((p, i) => (
          <ProductCard key={ i } product={ p } />
        )) }
      </InfiniteScroller>
    </>
  )
}

export default Catalog