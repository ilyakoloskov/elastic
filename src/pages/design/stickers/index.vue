<script setup lang="ts">
const { data, pending, error } = useApiFetch('design/stickers/')

const stickers = computed(() => data.value || {})
definePageMeta({
  layout: 'product',
})
</script>

<template>
  <div class="product-body">
    <template v-if="pending">
      <AppLoader />
    </template>
    <template v-else>
      <SectionStickers :data="stickers.design" />

      <SectionGallery :items="stickers.gallery" />
    </template>
  </div>
</template>
