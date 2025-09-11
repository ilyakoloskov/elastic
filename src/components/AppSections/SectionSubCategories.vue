<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const chunkSize = 5

const getChunks = (array) => {
  const result = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}

const chunks = computed(() => getChunks(props.items))
</script>

<template>
  <section class="subcategory">
    <AppContainer class="subcategory__container">
      <template
        v-for="(chunk, chunkIndex) in chunks"
        :key="chunkIndex"
      >
        <RouterLink
          v-for="(item, itemIndex) in chunk"
          :key="item.id"
          :class="[
            'subcategory-item',
            {
              'subcategory-item_md': itemIndex + 1 < 3 || chunk.length < 3,
              'subcategory-item_lg': chunk.length < 2,
            },
          ]"
          :to="{
            path: item.url,
          }"
        >
          <img
            :alt="item.name || `Изображение ${item.id}`"
            class="subcategory-item__img"
            :src="item.img"
          />
          <span
            v-if="item.name"
            class="subcategory-item__name"
          >
            {{ item.name }}
          </span>
          <div class="subcategory-item__overlay" />
        </RouterLink>
      </template>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.subcategory {
  &__container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
}

.subcategory-item {
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
    .subcategory-item__img {
      transition: var(--transition);
      transform: scale(1.2);
    }

    .subcategory-item__name {
      bottom: 48px;
      left: 48px;
      transition: var(--transition);
    }

    .subcategory-item__overlay {
      background-color: rgba(0, 0, 0, 0.4);
      transition: var(--transition);
    }
  }
}
</style>
