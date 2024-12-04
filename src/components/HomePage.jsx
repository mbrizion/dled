import React from 'react'
import { useTranslation } from 'react-i18next'

import bowl from '../assets/img/creations/bowl/bowl2_big.jpg'
import senor1 from '../assets/img/creations/senor/senor1_big.jpg'
import mug from '../assets/img/creations/mug/mug1_big.jpg'
import mug1 from '../assets/img/creations/mug/mug3_big.jpg'
import pitcher from '../assets/img/creations/pitcher/pitcher_big.jpg'
import { SlideCarousel } from './SlideCarousel'
import Header from './Header'

const images = [bowl, senor1, mug, mug1, pitcher]

const HomePageV2 = () => {
  const { t } = useTranslation()

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header
        isTransparent
        classNames="w-full z-50 absolute"
        logoClassnames="md:w-48 w-36"
      />
      <SlideCarousel images={images} />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-white text-center text-4xl md:text-6xl font-medium mb-20">
          {t('siteTitle')}
        </h1>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-medium text-white text-center">
            {t('welcome')}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePageV2
