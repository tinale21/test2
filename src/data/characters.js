const BASE = import.meta.env.BASE_URL

export const characters = [
  {
    id: 'kevin',
    name: 'Kevin',
    title: 'The Thinker',
    image: `${BASE}characters/kevin.png`,
    stats: { speed: 65, knowledge: 75, curiosity: 45 },
  },
  {
    id: 'hanna',
    name: 'Hanna',
    title: 'The Risk-Taker',
    image: `${BASE}characters/hanna.png`,
    stats: { speed: 65, knowledge: 75, curiosity: 50 },
  },
  {
    id: 'rae',
    name: 'Rae',
    title: 'The Brains',
    image: `${BASE}characters/rae.png`,
    stats: { speed: 70, knowledge: 90, curiosity: 55 },
  },
  {
    id: 'daniel',
    name: 'Daniel',
    title: 'The Explorer',
    image: `${BASE}characters/daniel.png`,
    stats: { speed: 65, knowledge: 80, curiosity: 100 },
  },
]
