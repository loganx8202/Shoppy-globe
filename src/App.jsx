import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Suspense, lazy } from 'react'

// Lazy-loaded pages
const ProductList = lazy(() => import('./pages/ProductList'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Cart = lazy(() => import('./pages/Cart'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Suspense>
    </>
  )
}

export default App
