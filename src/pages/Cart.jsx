import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from '../redux/cartSlice'
import Button from '../components/Button'

function Cart() {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4"
              >
                {/* Left: Product Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                  </div>
                </div>

                {/* Right: Qty Controls + Remove */}
                <div className="flex items-center gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                    <button
                      onClick={() => dispatch(decrementQty(item.id))}
                      className="text-lg font-bold text-pink-600 hover:text-pink-800"
                    >
                      –
                    </button>
                    <span className="font-semibold">{item.qty}</span>
                    <button
                      onClick={() => dispatch(incrementQty(item.id))}
                      className="text-lg font-bold text-pink-600 hover:text-pink-800"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-600 font-semibold text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Amount: ₹{totalAmount.toFixed(2)}
            </p>
            <Button className="mt-3">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
