import { useTranslation } from 'react-i18next'

// Bowl images
import bowl from '../assets/img/creations/bowl/bowl.jpg'
import bowl1 from '../assets/img/creations/bowl/bowl1.jpg'
import bowl2 from '../assets/img/creations/bowl/bowl2.jpg'
import bowl3 from '../assets/img/creations/bowl/bowl3.jpg'
import bowl4 from '../assets/img/creations/bowl/bowl4.jpg'
import bowl5 from '../assets/img/creations/bowl/bowl5.jpg'
import bowl6 from '../assets/img/creations/bowl/bowl6.jpg'
import bowl7 from '../assets/img/creations/bowl/bowl7.jpg'

// Flower pot images
import flower_pot1 from '../assets/img/creations/flower_pot/flower_pot1.jpg'
import flower_pot2 from '../assets/img/creations/flower_pot/flower_pot2.jpg'
import flower_pot3 from '../assets/img/creations/flower_pot/flower_pot3.jpg'
import flower_pot4 from '../assets/img/creations/flower_pot/flower_pot4.jpg'
import flower_pot5 from '../assets/img/creations/flower_pot/flower_pot5.jpg'
import flower_pot6 from '../assets/img/creations/flower_pot/flower_pot6.jpg'

// Mug images
import mug from '../assets/img/creations/mug/mug.jpg'
import mug1 from '../assets/img/creations/mug/mug1.jpg'
import mug2 from '../assets/img/creations/mug/mug2.jpg'
import mug3 from '../assets/img/creations/mug/mug3.jpg'
import mug4 from '../assets/img/creations/mug/mug4.jpg'
import mug5 from '../assets/img/creations/mug/mug5.jpg'
import mug6 from '../assets/img/creations/mug/mug6.jpg'
import mug7 from '../assets/img/creations/mug/mug7.jpg'
import mug21 from '../assets/img/creations/mug2/mug.jpg'
import mug22 from '../assets/img/creations/mug2/mug1.jpg'
import mug23 from '../assets/img/creations/mug2/mug2.jpg'

// Step background images
import step1 from '../assets/img/clayBg.jpg'
import step2 from '../assets/img/step2.jpg'
import step3 from '../assets/img/step3.jpg'
import step4 from '../assets/img/step4.jpg'

// picther
import pitcher1 from '../assets/img/creations/pitcher/pitcher1.jpg'
import pitcher2 from '../assets/img/creations/pitcher/pitcher2.jpg'
import pitcher3 from '../assets/img/creations/pitcher/pitcher3.jpg'
import pitcher4 from '../assets/img/creations/pitcher/pitcher4.jpg'

const categories = {
  bowls: {
    title: 'Bowls',
    items: [
      { image: bowl2, def: 'Definition for bowl2' },
      { image: bowl5, def: 'Definition for bowl5' },
      { image: bowl6, def: 'Definition for bowl6' },
      { image: bowl7, def: 'Definition for bowl7' },
    ],
  },
  pitcher: {
    title: 'pitcher',
    items: [
      { image: pitcher2, def: 'pitcher def' },
      { image: pitcher1, def: 'pitcher def' },
      { image: pitcher3, def: 'pitcher def' },
      { image: pitcher4, def: 'pitcher def' },
    ],
  },
  mug2: {
    title: 'Mug',
    items: [
      { image: mug23, def: 'Definition for mug2' },
      { image: mug22, def: 'Definition for mug1' },
      { image: mug21, def: 'Definition for mug' },
    ],
  },
  // flower_pot: {
  //   title: 'Flower Pots',
  //   items: [
  //     { image: flower_pot1, def: 'Definition for flower pot1' },
  //     { image: flower_pot2, def: 'Definition for flower pot2' },
  //     { image: flower_pot3, def: 'Definition for flower pot3' },
  //     { image: flower_pot4, def: 'Definition for flower pot4' },
  //     { image: flower_pot5, def: 'Definition for flower pot5' },
  //     { image: flower_pot6, def: 'Definition for flower pot6' },
  //   ],
  // },
  // mug: {
  //   title: 'Mug',
  //   items: [
  //     { image: mug, def: 'Definition for mug' },
  //     { image: mug1, def: 'Definition for mug1' },
  //     { image: mug2, def: 'Definition for mug2' },
  //     { image: mug3, def: 'Definition for mug3' },
  //     { image: mug4, def: 'Definition for mug4' },
  //     { image: mug5, def: 'Definition for mug5' },
  //     { image: mug6, def: 'Definition for mug6' },
  //     { image: mug7, def: 'Definition for mug7' },
  //   ],
  // },
}

export const usePotterySteps = () => {
  const { t } = useTranslation()

  const getStep = (id, titleKey, descriptionKey, image) => ({
    id,
    title: t(titleKey),
    description: t(descriptionKey),
    image,
  })

  const steps = [
    getStep('clay', 'clayTitle', 'clayDescription', step1),
    getStep('tournage', 'tournageTitle', 'tournageDescription', step2),
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

export default categories
