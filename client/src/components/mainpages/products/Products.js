import { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import ProductItem from '../utils/productItem/ProductItem'

function Products() {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <>
      <div className='products'>
        {products.map(product => (
          <ProductItem key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </div>
      {products.length === 0 && <Loading />}
    </>
  )
}
export default Products
