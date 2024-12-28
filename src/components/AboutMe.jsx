import { useTranslation } from 'react-i18next'
import rima from '../assets/img/Rima.jpg'
import { useEffect } from 'react'
import { useState } from 'react'
import qr from '../assets/img/dled_qr.png'

const AboutMe = () => {
  const { t } = useTranslation()
  const [keySequence, setKeySequence] = useState('')
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key

      setKeySequence((prevSequence) => {
        const newSequence = prevSequence + key
        if (newSequence === '42') {
          setIsMatch(true)
        } else {
          setIsMatch(false)
        }
        if (newSequence.length >= 2) {
          return ''
        }
        return newSequence
      })
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col items-center md:p-6 p-4 w-full">
      {isMatch && (
        <div
          className="bg-black bg-opacity-85 absolute w-screen h-screen top-0 z-50 flex items-center justify-center"
          onClick={() => setIsMatch(false)}
        >
          <img src={qr} alt="qr" className="mt-6 w-2/3 h-2/3 object-contain" />
        </div>
      )}
      <div className="max-w-4xl w-full overflow-hidden">
        <div className="relative text-center">
          <h1 className="text-lg md:text-4xl font-medium text-[#548cb8] font-aboreto w-full text-center relative -mb-1 md:-mb-4 z-10 uppercase">
            {t('aboutMeTitle')}
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:mt-8">
          {/* Left Section */}
          <div className="flex-1 md:p-6 space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
              {t('aboutMeDescription')}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 border-b md:border-b-0 md:border-l md:p-6 p-2 flex flex-col items-center relative">
            <img
              src={rima}
              alt="rima"
              className="md:w-fit md:h-full object-contain h-72 w-72"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
