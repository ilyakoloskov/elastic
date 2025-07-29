<script setup lang="ts">
const { data, pending, error } = useApiFetch('products/kosters/')

const kosters = computed(() => data.value || {})

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
      <SectionKosters
        :data="kosters.product"
        :pending="pending"
      />

      <SectionGallery :items="kosters.gallery" />
    </template>
  </div>
</template>
