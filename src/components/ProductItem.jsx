import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../redux/wishlistSlice'
import { addToCart, incrementQty, decrementQty } from '../redux/cartSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  const isInWishlist = wishlist.some(item => item.id === product.id)
  const cartItem = cart.find(item => item.id === product.id)

  return (
    <div
      className="
        border border-gray-200
        rounded-lg
        p-4
        shadow
        hover:shadow-md
        transition
        relative
      "
    >
      {/* ❤️ Wishlist Icon */}
      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className="absolute top-2 right-2 text-pink-500 text-xl z-10"
        aria-label="Toggle Wishlist"
      >
        {isInWishlist ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* 🔗 Clickable Card Body */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-contain mb-3"
        />
        <h3 className="font-semibold text-sm hover:text-pink-600">{product.title}</h3>
      </Link>

      <p className="text-gray-500 text-xs capitalize">{product.category}</p>
      <p className="text-pink-600 font-bold mt-1 mb-3">₹{product.price}</p>

      {/* 🛒 Cart Controls */}
      {cartItem ? (
        <div className="flex items-center justify-between border border-gray-200 rounded px-3 py-2">
          <button
            onClick={() => dispatch(decrementQty(product.id))}
            className="text-xl text-pink-600 font-bold"
          >
            –
          </button>
          <span className="text-sm font-medium">{cartItem.qty}</span>
          <button
            onClick={() => dispatch(incrementQty(product.id))}
            className="text-xl text-pink-600 font-bold"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-pink-600 text-white font-medium py-2 rounded hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductItem
