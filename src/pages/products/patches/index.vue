<script setup lang="ts">
const { data, pending, error } = useApiFetch('products/patches/')

const patches = computed(() => data.value || {})

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
      <SectionPatches
        :data="patches.product"
        :pending="pending"
      />
      <SectionGallery :items="patches.gallery" />
    </template>
  </div>
</template>
