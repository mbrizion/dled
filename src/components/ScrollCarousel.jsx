import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

export const ScrollCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 2 }),
  ])

  return (
    <div className="embla w-full h-full pointer-events-none" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((image, index) => (
          <img
            key={index}
            className="embla__slide w-full max-w-xl h-fit object-cover cursor-pointer ml-2"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
