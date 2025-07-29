<script setup lang="ts">
const { data, pending, error } = useApiFetch('products/keyrings/')

const keyrings = computed(() => data.value || {})

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
      <SectionKeyrings
        :data="keyrings.product"
        :pending="pending"
      />

      <SectionGallery :items="keyrings.gallery" />
    </template>
  </div>
</template>
