import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { productsByType } from '../config/products'

const Shop = () => {
  const navigate = useNavigate()
  const defaultTypes = ['crochet', 'pottery']

  const [selectedType, setSelectedType] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const types = Object.keys(productsByType)
  const categories =
    selectedType && productsByType[selectedType]
      ? Object.keys(productsByType[selectedType])
      : []

  // Get products to display based on the current state
  const productsToDisplay = useMemo(() => {
    if (selectedType && selectedCategory) {
      return productsByType[selectedType][selectedCategory] || []
    }

    if (selectedType) {
      return Object.values(productsByType[selectedType]).flat()
    }

    // Default case: show products for "crochet" and "pottery"
    return defaultTypes
      .filter((type) => productsByType[type]) // Ensure the type exists
      .flatMap((type) => Object.values(productsByType[type]).flat())
  }, [selectedType, selectedCategory])

  return (
    <div className="flex flex-col items-center bg-white p-4">
      {/* Type Filter */}
      <div className="flex space-x-4 mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType((prev) => (prev === type ? null : type))
              setSelectedCategory(null) // Reset category when type changes
            }}
            className={`py-2 px-4 rounded text-xl ${
              selectedType === type ? 'underline underline-offset-2' : ''
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      {selectedType === 'pottery' && categories.length > 0 && (
        <div className="flex space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category ? null : category,
                )
              }
              className={`py-2 px-4 rounded text-xl ${
                selectedCategory === category
                  ? 'underline underline-offset-2'
                  : ''
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsToDisplay.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/shop/${product.id}`)}
            onMouseEnter={() =>
              product.status?.label !== 'Sold Out' &&
              setHoveredProduct(product.id)
            }
            onMouseLeave={() =>
              product.status?.label !== 'Sold Out' && setHoveredProduct(null)
            }
            className="cursor-pointer relative flex flex-col items-center"
          >
            {product.status?.label === 'Sold Out' && (
              <span className="absolute top-2 right-2 flex items-center justify-center z-20 uppercase text-white font-bold transform tracking-widest p-2 bg-black bg-opacity-45 rounded-md">
                Sold Out
              </span>
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className={`w-full h-96 object-cover rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
              } ${product.status?.label === 'Sold Out' ? 'opacity-50' : ''} absolute`}
            />
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
        {productsToDisplay.length === 0 && (
          <p className="text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  )
}

export default Shop
