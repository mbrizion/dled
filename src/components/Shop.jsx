import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../config/products'

const Shop = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center bg-white p-4">
      <h1 className="text-4xl font-bold mb-8">Our Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/dled/shop/${product.id}`)}
            className="cursor-pointer"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover rounded shadow-lg"
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
