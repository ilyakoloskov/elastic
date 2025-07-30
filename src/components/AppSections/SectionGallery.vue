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
</script>

<template>
  <section class="gallery">
    <AppContainer class="gallery__container">
      <template
        v-for="(chunk, chunkIndex) in chunks"
        :key="chunkIndex"
      >
        <a
          v-for="(item, itemIndex) in chunk"
          :key="item.id"
          :class="[
            'gallery-item',
            {
              'gallery-item_md': itemIndex + 1 < 3 || chunk.length < 3,
              'gallery-item_lg': chunk.length < 2,
            },
          ]"
          :href="item.img.origin"
          @click="openGallery"
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
      </template>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.gallery {
  &__container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
}

.gallery-item {
  position: relative;
  grid-column: span 2;
  overflow: hidden;

  &_md {
    grid-column: span 3;
  }

  &_lg {
    grid-column: span 6;
  }

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
