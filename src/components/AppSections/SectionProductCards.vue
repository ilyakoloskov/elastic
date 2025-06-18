<script setup lang="ts">
const items = [1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8]

const chunkSize = 5

const getChunks = (array: number[]) => {
  const result: (number | string)[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  return result
}

const chunks = getChunks(items)
</script>

<template>
  <section class="product-cards">
    <AppContainer class="product-cards__container">
      <template
        v-for="(chunk, index) in chunks"
        :key="index"
      >
        <a
          v-for="(item, itemIndex) in chunk"
          :key="itemIndex"
          :class="[
            'product-card',
            {
              'product-card_md': itemIndex + 1 < 3 || chunk.length < 3,
              'product-card_lg': chunk.length < 2,
            },
          ]"
          href="#"
        >
          <img
            alt=""
            class="product-card__img"
            src="@assets/images/stub-image.jpg"
          />
          <span class="product-card__name">Lorem ipsum dolor sit amet {{ item }} </span>
          <div class="product-card__overlay" />
        </a>
      </template>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.product-cards {
  &__container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
}

.product-card {
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
    .product-card__img {
      transition: var(--transition);
      transform: scale(1.2);
    }

    .product-card__name {
      bottom: 48px;
      left: 48px;
      transition: var(--transition);
    }

    .product-card__overlay {
      background-color: rgba(0, 0, 0, 0.4);
      transition: var(--transition);
    }
  }
}
</style>
