import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../redux/wishlistSlice'
import { Link } from 'react-router-dom'

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow-sm relative hover:shadow-md transition">

              {/* ✅ Clickable image + title to product details */}
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-3"
                />
                <h3 className="font-semibold text-sm hover:text-pink-600">{item.title}</h3>
              </Link>

              <p className="text-sm text-gray-500 capitalize">{item.category}</p>
              <p className="text-pink-600 font-bold mt-1 mb-3">₹{item.price}</p>

              {/* ❌ Remove button */}
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
