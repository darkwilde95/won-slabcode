const ProductCard = ({ product }) => {
  return (
    <div className='card'>
      <img src={ product.image_url } className='product-img' alt='product-img' />
      <p className='product-description' style={{ marginTop: '0.5rem' }}>{ product.name }</p>
      <p className='product-description'>{ product.value }</p>
      <p className='points'>Obtienes X puntos</p>
    </div>
  )
}

export default ProductCard