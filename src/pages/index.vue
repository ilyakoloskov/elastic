<script setup>
import { useApiFetch } from '@/composables/useApiFetch'
const { data, pending, error } = useApiFetch('home/')

const main = computed(() => data.value?.main || {})
const design = computed(() => data.value?.design || {})
const callback = computed(() => data.value?.callback || {})
const products = computed(() => data.value?.products || {})
</script>

<template>
  <div class="main-page">
    <template v-if="pending">
      <AppLoader />
    </template>
    <template v-else>
      <SectionMain :data="main" />

      <SectionAdvantages />
      <!-- <SectionAbout :data="about" /> -->

      <SectionCategoriesDesign :data="design" />

      <SectionRequest :data="callback" />

      <SectionCategoriesProducts :data="products" />

      <SectionForm />
    </template>
  </div>
</template>
