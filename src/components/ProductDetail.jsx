import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useParams } from 'react-router-dom'
import { productsByType } from '../config/products'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'x' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const navigate = useNavigate()
  useEffect(() => {
    let foundProduct = null

    Object.values(productsByType).forEach((category) => {
      Object.values(category).forEach((subCategory) => {
        const match = subCategory.find((item) => item.id === parseInt(id))
        if (match) foundProduct = match
      })
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
    <div className="flex flex-col lg:flex-row gap-8 p-2 max-w-full overflow-hidden">
      <div
        className="flex gap-2 cursor-pointer w-fit h-fit"
        onClick={() => {
          navigate('/dled/shop/')
        }}
      >
        <HiOutlineArrowLeft className="text-2xl" />
        <span>Back to shop</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 p-2 max-w-full overflow-hidden md:mt-8">
        {/* Image Section */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-4">
          {/* Thumbnails */}
          <div className="mt-4 lg:mt-0 lg:w-20 max-h-[500px] overflow-auto">
            <div
              ref={emblaRef}
              className="embla flex flex-wrap gap-2 overflow-x-auto lg:overflow-hidden lg:flex-col"
            >
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
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.images[selectedIndex]}
              alt={product.name}
              className="w-full h-auto max-h-[500px] object-contain rounded md:max-w-full"
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
    </div>
  )
}

export default ProductDetail