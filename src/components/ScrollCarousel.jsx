import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'

export const ScrollCarousel = ({ images }) => {
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)
  const autoScrollDelay = 3000
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    isAutoScrollActive ? [AutoScroll({ speed: 2, startDelay: 1000 })] : [],
  )

  const resetAutoScroll = useCallback(() => {
    setIsAutoScrollActive(false)
    setTimeout(() => setIsAutoScrollActive(true), autoScrollDelay)
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    resetAutoScroll()
  }, [emblaApi, resetAutoScroll])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    resetAutoScroll()
  }, [emblaApi, resetAutoScroll])

  const handleMouseEnter = () => setIsAutoScrollActive(false)
  const handleMouseLeave = () => setIsAutoScrollActive(true)

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="embla w-full h-full pointer-events-none" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <img
              key={index}
              className="embla__slide w-full max-w-xl h-fit object-cover ml-2"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-4xl p-2 rounded-r-md"
        onClick={scrollPrev}
      >
        <HiOutlineChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white font-bold text-4xl p-2 rounded-l-md"
        onClick={scrollNext}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  )
}
