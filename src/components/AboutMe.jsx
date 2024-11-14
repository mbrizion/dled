import { useTranslation } from 'react-i18next'
import VaraText from './VaraText'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center bg-white p-2 w-full">
      <div className="flex flex-col items-center p-6 w-full">
        <h1 className="text-3xl font-semibold my-10">{t('aboutMe')}</h1>
        <div className="border w-full flex relative">
          <p className="text-4xl absolute left-1/2 transform -translate-x-1/2 -top-1 -translate-y-1/2">
            {t('aboutMeTitle')}
          </p>
          <div className="w-full">dsa</div>
          <div className="w-full">
            <VaraText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
