<script setup>
import { computed } from 'vue'

const animationHeader = computed(() => {
  return {
    animation: { from: { y: -60 }, to: { y: 0 } },
    type: 'from',
    duration: 1,
    clearStyle: true,
  }
})
</script>

<template>
  <AppHeader v-gsap="animationHeader" />
  <main class="app-main">
    <slot />
  </main>
  <footer class="app-footer"></footer>
</template>

<style lang="scss">
.app-main {
  flex-grow: 1;
}

.app-footer {
  height: 45px;
  background-color: var(--color-accent-900);
}
</style>
