import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'
import searchReducer from './searchSlice'

const store = configureStore({
  reducer: {
    products: productReducer,   
    cart: cartReducer,
    wishlist: wishlistReducer,
    search: searchReducer
  }
})

export default store
