import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id)
      if (exists) {
        return state.filter(item => item.id !== action.payload.id)
      } else {
        state.push(action.payload)
      }
    },
    // ✅ Add this reducer
    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
