import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { addToCart } from '../redux/cartSlice'
import { toggleWishlist } from '../redux/wishlistSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import useFetchProducts from '../hooks/useFetchProducts'

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  useFetchProducts() // ✅ Ensure Redux has products

  const products = useSelector((state) => state.products || [])

  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(id))
  }, [products, id])

  const wishlist = useSelector(state => state.wishlist)
  const isInWishlist = wishlist.some(item => item.id === product?.id)

  if (!product) {
    return (
      <div className="text-center p-10 text-gray-500">
        Product not found.{' '}
        <Link to="/products" className="text-pink-500 underline">Go back</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border p-4 rounded bg-white flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-[400px] object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-pink-600 text-xl font-semibold">₹{product.price}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex gap-4 pt-4">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => dispatch(toggleWishlist(product))}
            className="text-pink-600 text-2xl"
            aria-label="Toggle Wishlist"
          >
            {isInWishlist ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        <Link to="/products" className="inline-block mt-4 text-sm text-pink-600 underline hover:text-pink-800">
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails
