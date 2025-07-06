import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id)
      if (item) {
        item.qty += 1
      } else {
        state.push({ ...action.payload, qty: 1 })
      }
    },

    incrementQty: (state, action) => {
      const item = state.find(p => p.id === action.payload)
      if (item) {
        item.qty += 1
      }
    },

    // ✅ Fixed: safely remove item if qty <= 1
    decrementQty: (state, action) => {
      const item = state.find(p => p.id === action.payload)
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1
          return state
        } else {
          return state.filter(p => p.id !== action.payload) // ✅ remove item
        }
      }
      return state // ✅ always return fallback state
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },

    clearCart: () => []
  }
})

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
