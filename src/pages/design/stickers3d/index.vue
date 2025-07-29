<script setup lang="ts">
const { data, pending, error } = useApiFetch('design/stickers3d/')

const stickers3d = computed(() => data.value || {})

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
      <SectionStickers3D
        :data="stickers3d.design"
        :pending="pending"
      />

      <SectionGallery :items="stickers3d.gallery" />
    </template>
  </div>
</template>
