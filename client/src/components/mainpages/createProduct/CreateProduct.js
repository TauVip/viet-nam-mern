import { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'

const initialState = {
  product_id: '',
  title: '',
  price: 0,
  description: 'Some Description',
  content: 'Some Content',
  category: ''
}

function CreateProduct() {
  const state = useContext(GlobalState)
  const [product, setProduct] = useState(initialState)
  const [categories] = state.categoriesAPI.categories
  const [images, setImages] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div className='create_product'>
      <div className='upload'>
        <input type='file' name='file' id='file_up' />
        <div id='file_img'>
          <img src='' alt='' />
          <span>X</span>
        </div>
      </div>
    </div>
  )
}
export default CreateProduct
