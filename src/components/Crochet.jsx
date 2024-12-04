import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollCarouselWithThumbnails } from './ScrollCarousel.jsx'
import crochet from '../config/crochet.js'

const Crochet = () => {
  const { t } = useTranslation()
  const scrollInView = useRef(null)

  useEffect(() => {
    if (scrollInView.current) {
      scrollInView.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [t])

  return (
    <div className="flex flex-col items-center justify-center p-10 w-full">
      <div
        className="flex items-center justify-center text-4xl uppercase flex-col w-full"
        ref={scrollInView}
      >
        <h2 className="text-lg md:text-6xl font-medium text-[#548cb8] font-aboreto w-full text-center relative -mb-1 md:-mb-4 z-10">
          {t('crochetTitle')}
        </h2>
      </div>
      <div className="w-fit object-contain cursor-pointer mx-auto">
        <ScrollCarouselWithThumbnails images={crochet} />
      </div>
    </div>
  )
}

export default Crochet
