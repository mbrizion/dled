import { useRef } from 'react'
import { pottery } from '../config/pottery.js'
import usePotterySteps from '../config/potterySteps.js'
import { useTranslation } from 'react-i18next'
import Steps from './Steps'
import { ScrollCarouselWithThumbnails } from './ScrollCarousel.jsx'

const Pottery = () => {
  const { t } = useTranslation()
  const processRef = useRef(null)

  const steps = usePotterySteps()

  return (
    <div className="flex flex-col items-center justify-center p-10 w-full">
      <h1 className="text-3xl font-medium w-full">{t('pottery')}</h1>
      <div className="w-fit object-contain cursor-pointer mx-auto">
        <ScrollCarouselWithThumbnails images={pottery} />
      </div>
      <h1 ref={processRef} className="text-3xl font-medium w-full">
        {t('process')}
      </h1>
      <div className="flex flex-col flex-wrap gap-6 mt-10 w-full items-center">
        <div className="flex flex-col items-center mt-10 w-full">
          <Steps steps={steps} />
        </div>
      </div>
    </div>
  )
}

export default Pottery
