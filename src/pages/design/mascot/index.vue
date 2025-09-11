<script setup lang="ts">
const { data, pending, error } = useApiFetch('design/mascot/')

const mascot = computed(() => data.value || {})

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
      <SectionMascot
        :data="mascot.design"
        :pending="pending"
      />

      <SectionSubCategories :items="mascot.pages" />
    </template>
  </div>
</template>
