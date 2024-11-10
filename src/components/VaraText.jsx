import { useState, useEffect } from 'react'
import Vara from 'vara'

const VaraText = () => {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const element = document.getElementById('element')
    let varaInstance = null

    if (element) {
      varaInstance = new Vara(
        '#element',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
        [
          {
            text: 'Hello,',
            // textAlign: 'center',
            color: '#588bba',
          },
        ],
        {
          fontSize: 46,
          strokeWidth: 2,
          autoAnimation: startAnimation,
        },
      )
      const handleAnimationEnd = () => {
        varaInstance.destroy()
      }
      element.addEventListener('animationend', handleAnimationEnd)
      return () => {
        element.removeEventListener('animationend', handleAnimationEnd)
      }
    }
  }, [startAnimation])

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setStartAnimation((prevState) => !prevState)
    }, 1000)
    console.log('dsadsa')

    return () => {
      clearTimeout(intervalId)
    }
  }, [])

  return <div id="element"></div>
}

export default VaraText
