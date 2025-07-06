import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/productSlice'

function useFetchProducts() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      dispatch(setProducts(data.products)) // ✅ Must happen here
    }

    fetchProducts()
  }, [dispatch])

  return {}
}

export default useFetchProducts
