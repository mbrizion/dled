// Step background images
import { useTranslation } from 'react-i18next'
import step1 from '../assets/img/clayBg.jpg'
import step2 from '../assets/img/step2.jpg'
import step3 from '../assets/img/step3.jpg'
import step4 from '../assets/img/step4.jpg'
import step5 from '../assets/img/step5.jpg'

// Pottery steps hook
const usePotterySteps = () => {
  const { t } = useTranslation()

  const getStep = (id, titleKey, descriptionKey, image) => ({
    id,
    title: t(titleKey),
    description: t(descriptionKey),
    image,
  })

  const steps = [
    getStep('clay', 'clayTitle', 'clayDescription', step1),
    getStep('tournage', 'tournageTitle', 'tournageDescription', step5),
    getStep('tournassage', 'tournassageTitle', 'tournassageDescription', step2),
    getStep(
      'firstCuisson',
      'firstCuissonTitle',
      'firstCuissonDescription',
      step3,
    ),
    getStep('emaillage', 'emaillageTitle', 'emaillageDescription', step4),
    getStep(
      'secondCuisson',
      'secondCuissonTitle',
      'secondCuissonDescription',
      step3,
    ),
  ]

  return steps
}

export default usePotterySteps
