<script setup lang="ts">
const { data, pending, error } = useApiFetch('design/brandbook/')

const brandbook = computed(() => data.value || {})
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
      <SectionBrandbook
        :data="brandbook.design"
        :pending="pending"
      />

      <SectionGallery :items="brandbook.gallery" />
    </template>
  </div>
</template>
