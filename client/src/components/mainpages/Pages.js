import { Route, Switch } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import DetailProduct from './detailProduct/DetailProduct'
import Products from './products/Products'
import NotFound from './utils/not_found/NotFound'

function Pages() {
  return (
    <Switch>
      <Route path='/' exact component={Products} />
      <Route path='/detail/:id' exact component={DetailProduct} />

      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/cart' exact component={Cart} />

      <Route path='*' exact component={NotFound} />
    </Switch>
  )
}
export default Pages