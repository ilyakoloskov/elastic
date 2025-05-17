<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
const isSticky = ref(true)
const isScroll = ref(false)

const handleScroll = () => {
  isScroll.value = Boolean(window.scrollY > 0)
  console.log(window.scrollY)
  console.log(isScroll.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// const animations = {
//   header: {
//     animation: { from: { y: -60 }, to: { y: 0 } },
//     type: 'from',
//     duration: 1,
//     clearStyle: true,
//   },
//   footer: {
//     animation: { from: { y: 60 }, to: { y: 0 } },
//     type: 'from',
//     duration: 1,
//     clearStyle: true,
//     delay: 1,
//   },
// }
</script>

<template>
  <AppHeader
    :is-scroll="isScroll"
    :is-sticky="isSticky"
  />
  <main class="app-main">
    <slot />
  </main>
  <AppFooter />
</template>

<style lang="scss">
.app-main {
  flex-grow: 1;
}
</style>
