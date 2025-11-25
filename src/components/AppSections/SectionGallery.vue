<script setup lang="ts">
import baguetteBox from 'baguettebox.js'
import 'baguettebox.js/dist/baguetteBox.min.css'

interface GalleryItem {
  id: number
  img: {
    preview: string
    origin: string
  }
  name: string
}

const props = defineProps({
  items: {
    type: Array as PropType<GalleryItem[]>,
    default: () => [],
  },
})

const chunkSize = 5

const getChunks = (array: GalleryItem[]) => {
  const result: GalleryItem[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}

const chunks = computed(() => getChunks(props.items))

onMounted(() => {
  nextTick(() => {
    baguetteBox.run('.gallery', {
      animation: 'fadeIn',
      noScrollbars: true,
      overlayBackgroundColor: 'rgba(0,0,0,0.8)',
    })
  })
})

const openGallery = (index: number) => {
  const galleryItems = document.querySelectorAll('.gallery-item')
  if (galleryItems[index]) {
    ;(galleryItems[index] as HTMLElement).click()
  }
}

// const chunksMock = [
//   [
//     {
//       id: 11,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/11_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/11.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 9,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 10,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 12,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 12,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//   ],
//   [
//     {
//       id: 112,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 112,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 9,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 9,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//     {
//       id: 9,
//       img: {
//         preview: 'https://e-lastic.pro/u/product_photo/1/9_big.webp',
//         origin: 'https://e-lastic.pro/u/product_photo/1/9.jpg',
//       },
//       name: '',
//     },
//   ],
// ]

const groupLength = ref<number>(6)

const groups = computed(() => {
  let i = 0
  const groups = []

  while (i < props.items.length) {
    const group = props.items.slice(i, i + groupLength.value)

    if (group.length === 1 && groupLength.value === 5) {
      const lastAddedGroup = groups[groups.length - 1]

      if (lastAddedGroup?.length > 0) {
        const lastElement = lastAddedGroup.pop()

        if (lastElement) {
          group.push(lastElement)
        }
      }
    }

    groups.push(group)

    i += groupLength.value
  }

  return groups
})

const groupLengthSetup = () => {
  if (window.innerWidth >= 1440) {
    groupLength.value = 5
  } else {
    groupLength.value = 6
  }
}

onMounted(() => {
  groupLengthSetup()
  window.addEventListener('resize', groupLengthSetup)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', groupLengthSetup)
})
</script>

<template>
  <section class="gallery">
    <AppContainer>
      <div
        class="gallery__container"
        v-for="(group, i) in groups"
        :key="i"
        :class="[`gallery__container_${group.length}`]"
      >
        <div
          v-for="(item, itemIndex) in group"
          :key="item.id"
          class="gallery__col"
        >
          <a
            :class="['gallery-item']"
            :href="item.img.origin"
            @click.prevent="openGallery(itemIndex)"
          >
            <img
              :alt="item.name || `Изображение ${item.id}`"
              class="gallery-item__img"
              :src="item.img.preview"
            />
            <span
              v-if="item.name"
              class="gallery-item__name"
            >
              {{ item.name }}
            </span>
            <div class="gallery-item__overlay" />
          </a>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.gallery {
  .app-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px 16px;
    }

    @media screen and (min-width: 1024px) {
      gap: 24px;
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  &__col {
    grid-column: span 1 / span 1;
    overflow: hidden;
  }

  &__container_1 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 6 / span 6;
    }
  }

  &__container_2 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 6 / span 6;
    }
  }

  &__container_3 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 4 / span 4;
    }
  }

  &__container_4 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 6 / span 6;
    }
  }

  &__container_5 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 4 / span 4;
    }
  }

  &__container_6 > div {
    @media screen and (min-width: 1440px) {
      grid-column: span 4 / span 4;
    }
  }

  &__container_5 > div:nth-child(1),
  &__container_5 > div:nth-child(2) {
    @media screen and (min-width: 1440px) {
      grid-column: span 6 / span 6;
    }
  }
}

.gallery-item {
  position: relative;
  grid-column: span 2;
  overflow: hidden;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: var(--transition);
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  &__name {
    position: absolute;
    bottom: 24px;
    left: 24px;
    z-index: 2;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary-20);
    transition: var(--transition);
  }

  &:hover {
    .gallery-item__img {
      transition: var(--transition);
      transform: scale(1.2);
    }

    .gallery-item__name {
      bottom: 48px;
      left: 48px;
      transition: var(--transition);
    }

    .gallery-item__overlay {
      background-color: rgba(0, 0, 0, 0.4);
      transition: var(--transition);
    }
  }
}
</style>
