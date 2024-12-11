import red_flower from '../assets/img/creations/red_flower/red_flower.jpg'

import senor from '../assets/img/creations/senor/senor1.jpg'
import senor1 from '../assets/img/creations/senor/senor2.jpg'
import senor2 from '../assets/img/creations/senor/senor3.jpg'

import bag2 from '../assets/img/creations/bag/bag3.jpg'

import garlic from '../assets/img/creations/garlic/garlic.jpg'

import kirby from '../assets/img/creations/kirby/kirby.jpg'

import plant1 from '../assets/img/creations/plant/plant1.jpg'
import plant2 from '../assets/img/creations/plant/plant2.jpg'
import plant3 from '../assets/img/creations/plant/plant3.jpg'

// Add all imports to the array
const crochet = [
  garlic,
  red_flower,
  senor,
  plant1,
  bag2,
  senor2,
  plant2,
  senor1,
  kirby,
  plant3,
]

// Randomize the array
const randomizedCrochet = crochet.sort(() => Math.random() - 0.5)

export default randomizedCrochet
