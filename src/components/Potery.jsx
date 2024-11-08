import Carousel from './Carousel'
import categories, { usePotterySteps } from '../config/potery.js'
import { useTranslation } from 'react-i18next'
import Steps from './Steps.jsx'

const Potery = () => {
  const { t } = useTranslation()

  const steps = usePotterySteps()

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium w-full mt-20">{t('pottery')}</h1>
      <div className="text-left mt-6">
        <p className="text-xl pb-2">{t('potteryDescription')}</p>
        <p className="text-lg">{t('potteryDescriptionP2')}</p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
        {Object.entries(categories).map(([key]) => (
          <div key={key} className="mb-8 w-fit">
            <Carousel category={categories[key]} />
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-medium w-full mt-20">{t('process')}</h1>
      <div className="flex flex-col flex-wrap gap-6 mt-10 w-full items-center">
        <div className="flex flex-col items-center mt-10 w-full">
          <Steps steps={steps} />
        </div>
      </div>
    </div>
  )
}

export default Potery
