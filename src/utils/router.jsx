import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App.jsx'
import Pottery from '../components/Pottery.jsx'
import Contact from '../components/Contact.jsx'
import Crochet from '../components/Crochet.jsx'
import Shop from '../components/Shop.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Header from '../components/Header.jsx'
import ProductDetail from '../components/ProductDetail.jsx'
import { useLocation, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Layout Wrapper with Header
const Layout = () => (
  <div className="flex flex-col items-center bg-white xl:p-8 xl:pt-0 p-2">
    <ScrollToTop />
    <div className="w-full">
      <Header logoClassnames="w-32" />
    </div>
    <Outlet />
  </div>
)

// Define Routes
const router = createBrowserRouter([
  {
    path: '/dled/',
    element: <App />,
  },
  {
    path: '/dled',
    element: <Layout />, // Shared Layout with Header
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:id', // Dynamic Route for Product Details
        element: <ProductDetail />,
      },
      {
        path: 'pottery',
        element: <Pottery />,
      },
      {
        path: 'crochet',
        element: <Crochet />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'aboutme',
        element: <AboutMe />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dled/" replace />,
  },
])

export default router
