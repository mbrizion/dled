import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import homepageBg from './assets/img/favicon.png'
import HomePage from './components/HomePage'
import pottery from './assets/img/creations/bag/bag3.jpg'
import crochet from './assets/img/creations/bowl/bowl2.jpg'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function App() {
  const targetRef = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition < 5) setHasScrolled(false)

      if (!hasScrolled && scrollPosition > 1 && targetRef.current) {
        setHasScrolled(true)
        targetRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <div>
      <HomePage imageSrc={homepageBg} altText="Beautiful pottery and crochet" />
      <div
        ref={targetRef}
        className="w-full h-screen flex flex-col items-center bg-white xl:p-8 xl:pt-0 p-2"
      >
        <Header classNames="w-full" logoClassnames="w-28" />
        <div className="flex md:gap-6 gap-2 items-center justify-center h-full flex-col md:flex-row">
          {[crochet, pottery].map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                navigate(index === 0 ? '/dled/pottery/' : '/dled/crochet/')
              }
              className={`w-full max-w-80 md:max-w-[calc(100vh-12rem)] relative group transition-all duration-200 cursor-pointer md:mb-0 mb-2 ${
                hoveredIndex === index
                  ? 'scale-105 opacity-100 z-10'
                  : hoveredIndex === null
                    ? 'opacity-100'
                    : 'opacity-50 transition-opacity'
              }`}
            >
              <img
                src={img}
                className="w-full object-cover cursor-pointer md:ml-2 filter brightness-[0.6] rounded-md"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                {index === 0 ? t('pottery') : t('crochet')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
