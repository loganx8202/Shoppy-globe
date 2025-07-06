import useFetchProducts from '../hooks/useFetchProducts'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'

function ProductList() {
  const { loading, error } = useFetchProducts()
  const products = useSelector((state) => state.products)
  const searchTerm = useSelector((state) => state.search)  // get search text

  // filter with search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="text-center p-10">Loading products...</div>
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

