<template>
  <section class="subproduct-images">
    <div class="subproduct-images__wrapper">
      <img
        v-for="item in items"
        :src="item.img.preview"
        :key="item.id"
        class="subproduct-images__item"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
})
</script>

<style lang="scss">
.subproduct-images {
  &__wrapper {
    margin-top: 48px;
  }

  &__item {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}
</style>
