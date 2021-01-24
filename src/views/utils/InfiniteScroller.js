import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

const InfiniteScroller = ({ children, hasMore, update, containerClass }) => {
  
  const [loading, setLoading] = useState(false)
  const loadMore = () => update(setLoading)
  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
  })

  return (
    <div className={ containerClass } ref={ infiniteRef }>
      { children }
      { loading && <p className='text-center py-5'>Cargando...</p> }
    </div>
  )
}

export default InfiniteScroller