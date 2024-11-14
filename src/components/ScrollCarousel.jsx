import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

export const ScrollCarouselWithThumbnails = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)
  const [isMouseInside, setIsMouseInside] = useState(false)
  const autoScrollDelay = 1000

  const [mainRef, mainApi] = useEmblaCarousel(
    { loop: true },
    isAutoScrollActive
      ? [AutoScroll({ delay: autoScrollDelay, speed: 2 })]
      : [],
  )
  const [thumbRef, thumbApi] = useEmblaCarousel({ containScroll: 'keepSnaps' })

  useEffect(() => {
    if (!mainApi) return
    const onSelect = () => {
      setSelectedIndex(mainApi.selectedScrollSnap())
      if (thumbApi) thumbApi.scrollTo(mainApi.selectedScrollSnap())
    }
    mainApi.on('select', onSelect)
    return () => mainApi.off('select', onSelect)
  }, [mainApi, thumbApi])

  const disableAutoScroll = useCallback(() => {
    setIsAutoScrollActive(false)
  }, [])

  const enableAutoScroll = useCallback(() => {
    setIsAutoScrollActive(true)
  }, [])

  const scrollPrev = useCallback(() => {
    if (mainApi) {
      mainApi.scrollPrev()
      disableAutoScroll()
    }
  }, [mainApi, disableAutoScroll])

  const scrollNext = useCallback(() => {
    if (mainApi) {
      mainApi.scrollNext()
      disableAutoScroll()
    }
  }, [mainApi, disableAutoScroll])

  const onThumbnailClick = useCallback(
    (index) => {
      if (mainApi) {
        mainApi.scrollTo(index)
        disableAutoScroll()
      }
    },
    [mainApi, disableAutoScroll],
  )

  const handleMouseLeave = () => {
    setIsMouseInside(false)
    enableAutoScroll()
  }

  return (
    <div
      className="flex flex-col lg:max-w-screen-2xl md:max-w-screen-lg sm:max-w-screen-md max-w-screen-sm"
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hidden sm:block"
          onClick={scrollPrev}
        >
          <HiOutlineChevronLeft size={24} />
        </button>

        <div className="embla w-full" ref={mainRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div
                className="embla__slide w-full h-fit object-cover ml-2 xl2:max-w-2xl lg:max-w-xl md:max-w-lg sm:max-w-md max-w-sm"
                key={index}
              >
                <img
                  className="w-full h-auto object-cover"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hidden sm:block"
          onClick={scrollNext}
        >
          <HiOutlineChevronRight size={24} />
        </button>
      </div>

      <div className="embla-thumbs mt-4" ref={thumbRef}>
        <div className="embla__container flex justify-center gap-2 flex-wrap items-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`embla__slide w-20 h-20 border-2 ${
                selectedIndex === index
                  ? 'border-blue-500 rounded-md'
                  : 'border-transparent'
              }`}
              onClick={() => onThumbnailClick(index)}
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
