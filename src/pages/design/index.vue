<script setup>
definePageMeta({
  layout: 'category',
})
</script>

<template>
  <div class="products-list">
    <AppContainer class="product-list__container">
      <h1 class="product-list__title">Дизайн</h1>
      <div class="product-list__wrapper">
        <AppCard
          v-for="item in 6"
          :key="item"
          class="product-list__item"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style lang="scss">
.product-list {
  &__title {
    @include title();
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-m);
  }
}
</style>
