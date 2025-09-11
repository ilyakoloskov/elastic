<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="page-error">
    <AppHeader />
    <AppContainer class="page-error__container">
      <h1 class="page-error__title">{{ error.statusCode }}</h1>
      <NuxtLink
        class="page-error__link"
        to="/"
        >Вернуться на главную</NuxtLink
      >
    </AppContainer>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.page-error {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100svh;

  &__container {
    text-align: center;
  }

  &__title {
    font-size: calc(var(--font-size-xl) * 2);
    color: var(--color-accent-200);
  }

  &__link {
    font-size: var(--font-size-xl);
    color: var(--color-primary-300);
    border-bottom: 1px solid var(--color-accent-200);
  }
}
</style>
