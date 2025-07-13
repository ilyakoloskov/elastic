import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    designItems: {
      label: 'Дизайн',
      category: 'design',
      items: [
        { label: 'Маскот', link: 'mascot' },
        { label: 'Раскраски', link: 'coloring' },
        { label: 'Стикеры', link: 'stickers' },
        { label: '3D-стикеры', link: 'stickers3d' },
        { label: 'ТГ-стикеры', link: 'stickers-tg' },
        { label: 'Брендбук', link: 'brandbook' },
      ],
    },

    productsItems: {
      label: 'Изделия из ПВХ',
      category: 'products',
      items: [
        { label: 'Джибитсы', link: 'jibits' },
        { label: 'Магниты', link: 'magnets' },
        { label: 'Брелоки', link: 'keyrings' },
        { label: 'Пуллеры', link: 'pullers' },
        { label: 'Патчи', link: 'patches' },
        { label: 'Костеры', link: 'kosters' },
      ],
    },
  }),
})
