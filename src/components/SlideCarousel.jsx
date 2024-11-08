import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const SlideCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ])

  return (
    <div className="embla absolute inset-0 w-full h-full" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((image, index) => (
          <img
            key={index}
            className="embla__slide w-screen h-screen object-cover"
            src={image}
          />
        ))}
      </div>
    </div>
  )
}
