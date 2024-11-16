import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollCarouselWithThumbnails } from './ScrollCarousel.jsx'
import crochet from '../config/crochet.js'

const Crochet = () => {
  const { t } = useTranslation()
  const firstDivRef = useRef(null) // Create a ref for the first div

  useEffect(() => {
    document.title = t('potteryPageTitle')

    // Scroll the first div into view
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [t])

  return (
    <div
      ref={firstDivRef}
      className="flex flex-col bg-white p-2 md:p-10 w-full"
    >
      <div className="flex items-center justify-center text-4xl absolute left-1/2 transform -translate-x-1/2 -top-1 translate-y-[10rem] z-30 uppercase flex-col w-full">
        <h2 className="text-6xl font-medium text-[#548cb8] font-aboreto w-full text-center">
          {t('crochetTitle')}
        </h2>
      </div>
      <div className="w-fit h-[600px] object-contain cursor-pointer mx-auto">
        <ScrollCarouselWithThumbnails images={crochet} />
      </div>
    </div>
  )
}

export default Crochet
