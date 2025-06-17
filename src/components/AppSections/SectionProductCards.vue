<template>
  <section class="product-cards">
    <AppContainer class="product-cards__container">
      <a
        v-for="item in 7"
        :key="item"
        class="product-card"
        href="#"
      >
        <img
          alt=""
          class="product-card__img"
          src="@assets/images/stub-image.jpg"
        />
        <span class="product-card__name">Lorem ipsum dolor sit amet</span>
        <div class="product-card__overlay" />
      </a>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.product-cards {
  &__container {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 24px;
  }
}

.product-card {
  position: relative;
  grid-column: span 4 / span 4;

  overflow: hidden;

  &:nth-child(1) {
    grid-column: 1/7;
  }

  &:nth-child(2) {
    grid-column: 7/-1;
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
