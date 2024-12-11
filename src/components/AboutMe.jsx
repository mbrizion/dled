import { useTranslation } from 'react-i18next'
import logo from '../assets/img/logo.png'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center p-6 w-full">
      <div className="max-w-4xl w-full overflow-hidden">
        <div className="relative py-8 text-center">
          <h1 className="text-lg md:text-4xl font-medium text-[#548cb8] font-aboreto w-full text-center relative -mb-1 md:-mb-4 z-10 uppercase">
            {t('aboutMeTitle')}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 p-6 space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('aboutMeDescription')}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 border-t md:border-t-0 md:border-l p-6 flex flex-col items-center relative">
            <img
              src={logo}
              alt="Logo"
              className="mt-6 w-56 h-56 object-contain"
            />
            {/* Growing Effect */}
            <div className="relative mt-20 text-xl font-bold text-gray-700 overflow-hidden">
              <div className="grow-effect font-league text-6xl">Hello</div>
            </div>
          </div>
        </div>
      </div>

      {/* Growing effect styles */}
      <style jsx>{`
        .grow-effect {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: grow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes grow {
          0% {
            width: 0;
          }
          80% {
            width: 100%; /* Full word visible */
          }
          100% {
            width: 0; /* Reset to hidden */
          }
        }
      `}</style>
    </div>
  )
}

export default AboutMe
