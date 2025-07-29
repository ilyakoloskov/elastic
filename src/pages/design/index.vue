<script setup>
const { data, pending, error } = useApiFetch('design/')

definePageMeta({
  layout: 'category',
})
</script>

<template>
  <div class="design-list">
    <template v-if="pending">
      <AppLoader />
    </template>
    <AppContainer
      class="product-list__container"
      v-else
    >
      {{ data }}
      <h1 class="product-list__title">{{ data.seo.title }}</h1>
      <div class="product-list__wrapper">
        <AppCard
          v-for="item in data.products"
          :key="item.id"
          :url="item.url"
          :image="item.img"
          :name="item.name"
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
