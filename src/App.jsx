import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import PresentationPage from './components/PresentationPage'
import homepageBg from './assets/img/favicon.png'
import HomePageV2 from './components/HomePageV2'

function App() {
  const targetRef = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)

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
    <div className="overflow-x-hidden">
      <HomePageV2
        imageSrc={homepageBg}
        altText="Beautiful pottery and crochet"
      />
      <div
        ref={targetRef}
        className="flex flex-col items-center bg-white p-2 mt-screen"
      >
        <div className="w-full">
          <Header classNames="w-full" />
          <PresentationPage />
        </div>
      </div>
    </div>
  )
}

export default App
