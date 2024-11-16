import { useRef, useEffect } from 'react'
import { pottery } from '../config/pottery.js'
import usePotterySteps from '../config/potterySteps.js'
import { useTranslation } from 'react-i18next'
import Steps from './Steps'
import { ScrollCarouselWithThumbnails } from './ScrollCarousel.jsx'

const Pottery = () => {
  const { t } = useTranslation()
  const scollInView = useRef(null)

  const steps = usePotterySteps()

  useEffect(() => {
    // Scroll to the processRef element when the component mounts
    if (scollInView.current) {
      scollInView.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-10 w-full">
      <div
        className="flex items-center justify-center text-4xl absolute left-1/2 transform -translate-x-1/2 -top-1 translate-y-[10rem] z-30 uppercase flex-col w-full"
        ref={scollInView}
      >
        <h2 className="text-6xl font-medium text-[#548cb8] font-aboreto w-full text-center">
          {t('potteryTitle')}
        </h2>
      </div>
      <div className="w-fit object-contain cursor-pointer mx-auto">
        <ScrollCarouselWithThumbnails images={pottery} />
      </div>
      <h1 className="text-3xl font-medium w-full">{t('process')}</h1>
      <div className="flex flex-col flex-wrap gap-6 mt-10 w-full items-center">
        <div className="flex flex-col items-center mt-10 w-full">
          <Steps steps={steps} />
        </div>
      </div>
    </div>
  )
}

export default Pottery
