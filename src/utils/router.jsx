import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Pottery from '../components/Pottery.jsx'
import Contact from '../components/Contact.jsx'
import Crochet from '../components/Crochet.jsx'
import Shop from '../components/Shop.jsx'
import { Navigate } from 'react-router-dom'
import AboutMe from '../components/AboutMe.jsx'
import Header from '../components/Header.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const renderWithApp = (Component) => (
  <div className="flex flex-col items-center bg-white xl:p-8  xl:pt-0 p-2">
    <ScrollToTop />
    <div className="w-full">
      <Header logoClassnames="w-32" />
    </div>
    <Component />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/dled/',
    element: <App />,
  },
  {
    path: '/dled/shop',
    element: renderWithApp(Shop),
  },
  {
    path: '/dled/pottery/',
    element: renderWithApp(Pottery),
  },
  {
    path: '/dled/crochet/',
    element: renderWithApp(Crochet),
  },
  {
    path: '/dled/contact/',
    element: renderWithApp(Contact),
  },
  {
    path: '/dled/aboutme',
    element: renderWithApp(AboutMe),
  },
  {
    path: '*',
    element: <Navigate to="/dled/" replace />,
  },
])

export default router
