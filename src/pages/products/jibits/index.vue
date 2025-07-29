<script setup>
const { data, pending, error } = useApiFetch('products/jibits/')

const jibits = computed(() => data.value || {})

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
      <SectionJibits
        :data="jibits"
        :pending="pending"
      />

      <SectionGallery :items="jibits.gallery" />
    </template>
  </div>
</template>
