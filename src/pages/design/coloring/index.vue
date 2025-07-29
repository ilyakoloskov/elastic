<script setup lang="ts">
const { data, pending, error } = useApiFetch('design/coloring/')

const coloring = computed(() => data.value || {})
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
      <SectionColoring
        :data="coloring.design"
        :pending="pending"
      />

      <SectionGallery :items="coloring.gallery" />
    </template>
  </div>
</template>
