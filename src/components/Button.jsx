function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-2 rounded-md font-semibold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out ${className}`}
    >
      <span className="z-10 relative">{children}</span>
      <span className="absolute inset-0 opacity-0 bg-white scale-0 transition-transform duration-500 ease-out rounded-full pointer-events-none group-hover:scale-150 group-hover:opacity-10"></span>
    </button>
  )
}

export default Button;
