import { useTranslation } from 'react-i18next'
import Header from './Header'

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="flex flex-col items-center p-6 space-y-6">
        <h1 className="text-3xl font-semibold">{t('aboutMe')}</h1>
      </div>
    </div>
  )
}

export default AboutMe
