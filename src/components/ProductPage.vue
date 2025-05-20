<script setup lang="ts">
import Arrow from '@/assets/icons/arrow.svg?component'
</script>

<template>
  <TheContainer class="product-page product-page__container">
    <BackLink class="product-page__back-link"/>
  </TheContainer>
  <slot />
  <FeedbackFormBlock />
</template>

<style scoped lang="scss">
  .product-page {
    &__back-link {
      margin-top: 48px;
    }
  }
</style>