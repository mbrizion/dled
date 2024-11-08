import Header from './Header'
import Carousel from './Carousel'
import categories from '../config/crochet.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Crochet = () => {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('potteryPageTitle')
  }, [t])

  return (
    <div className="flex flex-col bg-white p-10 w-full">
      <h1 className="text-3xl font-medium mt-20">{t('crochet')}</h1>
      <div className="text-left mt-6">
        <p className="text-lg">{t('potteryDescription')}</p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center">
        {Object.entries(categories).map(([key, { title }]) => (
          <div key={key} className="mb-8">
            <Carousel category={categories[key]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crochet
