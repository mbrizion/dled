// Flower pot images
import red_flower from '../assets/img/creations/red_flower/red_flower.jpg'
import red_flower1 from '../assets/img/creations/red_flower/red_flower1.jpg'
import white_flower from '../assets/img/creations/white_flower/white_flower.jpg'

// bag
import bag1 from '../assets/img/creations/bag/bag1.jpg'
import bag2 from '../assets/img/creations/bag/bag2.jpg'
import bag3 from '../assets/img/creations/bag/bag3.jpg'

// plant
import plant1 from '../assets/img/creations/plant/plant1.jpg'
import plant2 from '../assets/img/creations/plant/plant2.jpg'
import plant3 from '../assets/img/creations/plant/plant3.jpg'

// kirby
import kirby from '../assets/img/creations/kirby/kirby.jpg'

// garlic
import garlic from '../assets/img/creations/garlic/garlic.jpg'

const categories = {
  red_flower: {
    title: 'Red flower',
    items: [
      { image: red_flower, def: 'Definition for red flower' },
      { image: red_flower1, def: 'Definition for red flower' },
      { image: white_flower, def: 'Definition for white flower' },
    ],
  },
  bag: {
    title: 'bag',
    items: [
      { image: bag1, def: 'bag def' },
      { image: bag2, def: 'bag def' },
      { image: bag3, def: 'bag def' },
    ],
  },
  plant: {
    title: 'plant',
    items: [
      { image: plant1, def: 'plant def' },
      { image: plant2, def: 'plant def' },
      { image: plant3, def: 'plant def' },
    ],
  },
  garlic: {
    title: 'garlic',
    items: [{ image: garlic, def: 'garlic def' }],
  },
  kirby: {
    title: 'kirby',
    items: [{ image: kirby, def: 'kirby def' }],
  },
}

export default categories
