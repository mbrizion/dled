import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useParams } from 'react-router-dom'
import { productsByType } from '../config/products'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Find the product by ID across all categories
  useEffect(() => {
    let foundProduct = null
    Object.values(productsByType).forEach((category) => {
      const match = category.find((item) => item.id === parseInt(id))
      if (match) foundProduct = match
    })
    setProduct(foundProduct)
  }, [id])

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedIndex(index)
    if (emblaApi) emblaApi.scrollTo(index)
  }

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  if (!product) return <div>Product not found</div>

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Left Sidebar Thumbnails */}
      <div className="flex">
        <div className="w-20 overflow-hidden mr-4">
          <div ref={emblaRef} className="embla">
            <div className="embla__container flex flex-col gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    selectedIndex === index
                      ? 'border-2 border-[#548cb8] rounded-md'
                      : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - ${index}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src={product.images[selectedIndex]}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded shadow-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold mb-4">{product.price}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#548cb8] text-white cursor-pointer px-6 py-3 mb-6 inline-block hover:bg-[#37566e]"
        >
          BUY ON EBAY
        </a>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
        <p className="mt-4 text-gray-600">
          <strong>Materials:</strong> Porcelain <br />
          <strong>Enamel:</strong> Brilliant
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
