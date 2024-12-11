import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { cn } from '../utils/cn.js'
import insta from '../assets/img/insta.svg'
import instadark from '../assets/img/instadark.png'
import { instaLink } from '../config.json'
import { useTranslation } from 'react-i18next'
import fr from '../assets/img/fr.svg'
import us from '../assets/img/us.svg'
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineShoppingCart,
} from 'react-icons/hi2'
import crochet2 from '../assets/img/crochet2.svg'

import pottery from '../assets/img/pottery.svg'

import { HiOutlineSparkles } from 'react-icons/hi'
import { isMobile } from 'react-device-detect'

const flagIcons = { fr, us }
const Header = ({ classNames, logoClassnames, isTransparent }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language || 'fr')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const menuItems = [
    {
      icon: <HiOutlineShoppingCart className="text-3xl text-black" />,
      label: t('shop'),
      route: '/dled/shop',
      classNames: 'hidden 2xl:block',
    },
    {
      icon: (
        <div className="h-7 w-7 min-h-8 min-w-8">
          <img src={pottery} />
        </div>
      ),
      label: t('pottery'),
      route: '/dled/pottery/',
    },
    {
      icon: (
        <div className="h-8 w-8 min-h-8 min-w-8">
          <img className="h-7 w-7" src={crochet2} />
        </div>
      ),
      label: t('crochet'),
      route: '/dled/crochet/',
    },
    {
      icon: (
        <HiOutlineChatBubbleOvalLeftEllipsis className="text-3xl text-black" />
      ),
      label: t('contact'),
      route: '/dled/contact/',
    },
    {
      icon: <HiOutlineSparkles className="text-3xl 2xl:hidden text-black" />,
      label: t('aboutMe'),
      route: '/dled/aboutme/',
      classNames: 'italic font-medium',
    },
  ]

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    setIsDropdownOpen(false)
  }

  const getOppositeLanguage = () => (language === 'fr' ? 'us' : 'fr')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  return (
    <header
      className={cn(
        'w-full transition-colors duration-300',
        isTransparent ? 'bg-transparent' : 'bg-white',
        classNames,
      )}
      id="header"
    >
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-0 sm:px-6 md:px-12">
        <div className="flex items-center justify-center mb-4 md:mb-0 min-w-48">
          <img
            src={logo}
            alt="logo"
            className={cn(
              'cursor-pointer',
              logoClassnames ? logoClassnames : 'md:w-36 w-44',
            )}
            onClick={() => {
              navigate('/')
              document.getElementById('header').scrollIntoView()
            }}
          />
        </div>
        <div
          className="text-2xl md:text-3xl font-medium text-center hidden xl:block cursor-pointer"
          onClick={() => {
            navigate('/')
            document.getElementById('header').scrollIntoView()
          }}
        ></div>
        <nav className="flex w-full md:justify-end justify-between items-center">
          <div className={cn(isTransparent && 'invert')}>
            <ul className="flex items-center justify-center space-x-4 md:space-x-8 text-base md:text-lg font-medium text-slate-800 mr-0 md:mr-14 pl-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    'relative cursor-pointer flex flex-col items-center text-black',
                  )}
                  onClick={() => navigate(item.route)}
                >
                  <div className="flex gap-2">
                    {item.icon}
                    {item.icon ? (
                      <span className="hidden 2xl:block">{item.label}</span>
                    ) : (
                      <span
                        className={cn('md:text-lg text-sm', item.classNames)}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <div className={cn('relative flex items-center justify-center')}>
              <div
                className="relative w-8 h-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {!isMobile ? (
                  <>
                    <a
                      href={instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={instadark}
                        alt="Instagram dark logo"
                        className={cn(
                          'absolute transition-opacity duration-300 ease-in-out',
                          isHovered ? 'opacity-0' : 'opacity-100',
                          isTransparent ? 'invert' : '',
                        )}
                      />
                    </a>
                    <a
                      href={instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={insta}
                        alt="Instagram colorful logo"
                        className={cn(
                          'absolute transition-opacity duration-300 ease-in-out',
                          isHovered ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </a>
                  </>
                ) : (
                  <a href={instaLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={insta}
                      alt="Instagram colorful logo"
                      className={cn(
                        'absolute transition-opacity duration-300 ease-in-out',
                      )}
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
              >
                <img
                  src={flagIcons[language]}
                  alt="selected language flag"
                  className="w-6 h-6"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'h-4 w-4 transition-transform duration-300',
                    isDropdownOpen ? 'rotate-180' : '',
                    isTransparent && 'invert',
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white border border-gray-200 shadow-lg overflow-hidden z-20 flex items-center rounded-md">
                  <ul className="flex flex-col text-gray-700">
                    <li
                      onClick={() =>
                        handleLanguageChange(getOppositeLanguage())
                      }
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    >
                      <img
                        src={flagIcons[getOppositeLanguage()]}
                        alt={`${getOppositeLanguage()} flag`}
                        className="w-5 h-5 mr-2"
                      />
                      <span className="w-4 h-4" />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
