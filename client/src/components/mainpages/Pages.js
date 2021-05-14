import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import DetailProduct from './detailProduct/DetailProduct'
import OrderHistory from './history/OrderHistory'
import Products from './products/Products'
import NotFound from './utils/not_found/NotFound'

function Pages() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged

  return (
    <Switch>
      <Route path='/' exact component={Products} />
      <Route path='/detail/:id' exact component={DetailProduct} />

      <Route path='/login' exact component={isLogged ? NotFound : Login} />
      <Route
        path='/register'
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route
        path='/history'
        exact
        component={isLogged ? OrderHistory : NotFound}
      />

      <Route path='/cart' exact component={Cart} />

      <Route path='*' exact component={NotFound} />
    </Switch>
  )
}
export default Pages
