import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productsByType } from '../config/products'

const Shop = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('bowls')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const categories = Object.keys(productsByType)

  return (
    <div className="flex flex-col items-center bg-white p-4">
      {/* Tab Menu */}
      <div className="flex space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded text-xl ${
              selectedCategory === category
                ? 'underline underline-offset-2'
                : ''
            }`}
          >
            {category
              .replace(/([A-Z])/g, ' $1')
              .replace(/^\w/, (c) => c.toUpperCase())}
          </button>
        ))}
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsByType[selectedCategory].map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/dled/shop/${product.id}`)}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            className="cursor-pointer relative flex flex-col items-center"
          >
            {/* Default Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className={`w-full h-96 object-cover rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
              } absolute`}
            />
            {/* Hover Image */}
            <img
              src={product.images[1]}
              alt={product.name}
              className={`w-full h-96 object-cover rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
