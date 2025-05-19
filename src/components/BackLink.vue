<script setup lang="ts">

import Arrow from '@/assets/icons/arrow.svg?component'
</script>

<template>
  <div class="back-link">
    <NuxtLink class="back-link__link" to="/">
      <Arrow class="back-link__arrow-icon" />
      Вернуться на главную
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.back-link {
  &__arrow-icon {
    rotate: 180deg;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-primary-200);

    &:hover {
      color: var(--color-accent-100);
    }
  }
}
</style>