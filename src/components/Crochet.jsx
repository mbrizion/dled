import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollCarousel } from './ScrollCarousel.jsx'
import test from '../config/test.js'

const Crochet = () => {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('potteryPageTitle')
  }, [t])

  return (
    <div className="flex flex-col bg-white p-10 w-full">
      <h1 className="text-3xl font-medium">{t('crochet')}</h1>
      <div className="text-left mt-6">
        <p className="text-lg">{t('potteryDescription')}</p>
      </div>
      <div className="w-fit h-[600px] object-contain cursor-pointer mx-auto">
        <ScrollCarousel images={test} />
      </div>
    </div>
  )
}

export default Crochet
