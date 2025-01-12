// Bowl images
import bowl2 from '../assets/img/creations/bowl/bowl2.jpg'
import bowl5 from '../assets/img/creations/bowl/bowl5.jpg'
import bowl6 from '../assets/img/creations/bowl/bowl6.jpg'
import bowl7 from '../assets/img/creations/bowl/bowl7.jpg'

// Mug images
import mug1 from '../assets/img/creations/mug/mug1.jpg'
import mug3 from '../assets/img/creations/mug/mug3.jpg'

// Leaf bowl
import leaf_bowl from '../assets/img/creations/leaf_bowl/leaf_bowl.jpg'
import leaf_bowl1 from '../assets/img/creations/leaf_bowl/leaf_bowl1.jpg'

// Cup images
import cup from '../assets/img/creations/cup/cup.jpg'
import cup1 from '../assets/img/creations/cup/cup1.jpg'

// Blue bowl
import blue_bowl from '../assets/img/creations/blue_bowl/blue_bowl.jpg'
import blue_bowl1 from '../assets/img/creations/blue_bowl/blue_bowl1.jpg'

// Black bowl
import black_bowl from '../assets/img/creations/black_bowl/black_bowl.jpg'
import black_bowl1 from '../assets/img/creations/black_bowl/black_bowl1.jpg'

// Black cup
import black_cup from '../assets/img/creations/black_cup/black_cup.jpg'
import black_cup1 from '../assets/img/creations/black_cup/black_cup1.jpg'

// Tomato
import tomato from '../assets/img/creations/tomato/tomato.jpg'
import tomato1 from '../assets/img/creations/tomato/tomato1.jpg'
import tomato2 from '../assets/img/creations/tomato/tomato2.jpg'

// Plant
import plant from '../assets/img/creations/plant/plant1.jpg'
import plant2 from '../assets/img/creations/plant/plant2.jpg'
import plant3 from '../assets/img/creations/plant/plant3.jpg'

// Coasters
import coaster1 from '../assets/img/creations/coasters/coaster1.jpg'
import coaster3 from '../assets/img/creations/coasters/coaster2.jpg'
import coaster4 from '../assets/img/creations/coasters/coaster3.jpg'
import coaster5 from '../assets/img/creations/coasters/coaster4.jpg'
import coaster8 from '../assets/img/creations/coasters/coaster8.jpg'

import white_flower1 from '../assets/img/creations/white_flower/white_flower1.jpg'
import white_flower2 from '../assets/img/creations/white_flower/white_flower2.jpg'
import white_flower3 from '../assets/img/creations/white_flower/white_flower3.jpg'
import white_flower4 from '../assets/img/creations/white_flower/white_flower4.jpg'

const soldOutColor = 'text-white'

export const productsByType = {
  pottery: {
    bowls: [
      {
        id: 1,
        name: 'Bowl Set',
        images: [bowl2, bowl5, bowl6, bowl7],
        description:
          'A beautifully crafted bowl set, perfect for dining and decoration.',
        price: '€20,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
      {
        id: 2,
        name: 'Blue Bowl',
        images: [blue_bowl, blue_bowl1],
        description: 'Elegant blue bowls with a calming, oceanic finish.',
        price: '€22,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
      {
        id: 3,
        name: 'Black Bowl Set',
        images: [black_bowl, black_bowl1],
        description:
          'A sophisticated black bowl set, adding a modern touch to your table.',
        price: '€25,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
      {
        id: 4,
        name: 'Leaf Bowl',
        images: [leaf_bowl, leaf_bowl1],
        description: 'Nature-inspired leaf bowl, ideal for serving or display.',
        price: '€18,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
        status: { label: 'Sold Out', color: soldOutColor },
      },
    ],
    mugs: [
      {
        id: 5,
        name: 'Mug Set',
        images: [mug1, mug3],
        description:
          'A set of handcrafted ceramic mugs for coffee or tea lovers.',
        price: '€15,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    cups: [
      {
        id: 6,
        name: 'Cup Set',
        images: [cup, cup1],
        description: 'Minimalist cup set with a clean, modern design.',
        price: '€12,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
      {
        id: 7,
        name: 'Black Cup Set',
        images: [black_cup, black_cup1],
        description: 'Stylish black cup set for a contemporary aesthetic.',
        price: '€14,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
  },
  crochet: {
    tomato: [
      {
        id: 8,
        name: 'TOMATOOOOOOOOOOOO',
        images: [tomato, tomato1, tomato2],
        description: 'A warm and cozy tomato hat.',
        price: '€35,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    plant: [
      {
        id: 9,
        name: 'Plant',
        images: [plant, plant2, plant3],
        description: 'Plant chilling on a ladder.',
        price: '€35,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    coasters: [
      {
        id: 10,
        name: 'Coasters',
        images: [coaster1, coaster3, coaster4, coaster5, coaster8],
        description: "Coasters to warm cup's butt",
        price: '€35,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    white_flower: [
      {
        id: 11,
        name: 'White flower',
        images: [white_flower1, white_flower2, white_flower3, white_flower4],
        description: 'Flower power, bag banger',
        price: '€35,00',
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
  },
}
