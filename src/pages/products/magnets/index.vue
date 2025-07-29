<script setup lang="ts">
const { data, pending, error } = useApiFetch('products/magnets/')

const magnets = computed(() => data.value || {})

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
      <SectionMagnets
        :data="magnets.product"
        :pending="pending"
      />

      <SectionGallery :items="magnets.gallery" />
    </template>
  </div>
</template>
