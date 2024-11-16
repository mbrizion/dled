import { useTranslation } from 'react-i18next'
import VaraText from './VaraText'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center bg-white p-2 w-full">
      <div className="flex flex-col items-center p-6 w-full">
        <div className="border w-full flex relative">
          <p className="absolute left-1/2 transform -translate-x-1/2 -top-1 -translate-y-8 text-5xl font-medium text-[#548cb8] font-aboreto uppercase">
            {t('aboutMeTitle')}
          </p>
          <div className="w-full">
            <p className="text-xl bg-red-50">{t('aboutMeDescription')}</p>
          </div>
          <div className="w-full border-l">
            <VaraText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
