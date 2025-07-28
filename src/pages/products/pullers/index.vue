<script setup lang="ts">
import { useApiFetch } from '@/composables/useApiFetch'

const { data, pending, error } = useApiFetch('products/pullers/')

const pullers = computed(() => data.value || {})

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
      <SectionPullers
        :data="pullers"
        :pending="pending"
      />

      <SectionGallery :items="pullers.gallery" />
    </template>
  </div>
</template>
