import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import CategoriesAPI from './api/CategoriesAPI'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false)

  useEffect(() => {
    const refreshToken = async () => {
      const res = await axios.get('/user/refresh_token')

      setToken(res.data.accesstoken)

      setTimeout(() => {
        refreshToken()
      }, 15000)
    }
    refreshToken()
  }, [])

  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
    categoriesAPI: CategoriesAPI()
  }

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
