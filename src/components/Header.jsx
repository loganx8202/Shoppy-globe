import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm } from '../redux/searchSlice' // ✅ Correct path
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa'
import logo from '../../assets/Shopping.png' // ✅ Correct logo path

function Header() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

        {/* Left: Logo + Title */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="ShoppyGlobe" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-pink-600">ShoppyGlobe</span>
        </Link>

        {/* Center: 🔍 Search Bar (Always visible) */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <Link to="#" className="flex flex-col items-center hover:text-pink-600">
            <FaUser className="text-xl" />
            <span className="text-sm">Profile</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center hover:text-pink-600">
                <FaHeart className="text-xl" />
                <span className="text-sm">Wishlist</span>
            </Link>
          <Link to="/cart" className="relative flex flex-col items-center hover:text-pink-600">
            <FaShoppingBag className="text-xl" />
            <span className="text-sm">Bag</span>
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
