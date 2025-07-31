<script setup>
import { useGlobals } from '@/composables/useGlobals'
const { getNavigation } = useGlobals()

const props = defineProps({
  data: Object,
})
</script>

<template>
  <div class="section-products">
    <SectionCategories
      direction="left"
      :navigation="getNavigation.productsItems"
    >
      <template #img>
        <img
          alt=""
          class="section-products__img"
          :src="data.banner"
        />
      </template>
      <template #personage>
        <img
          alt=""
          class="section-products__personage"
          :src="data.personage"
        />
      </template>
      <template #title>{{ data.title }}</template>
      <template #subtitle> <div v-html="data.subtitle" /> </template>
      <template #description>{{ data.text }}</template>
    </SectionCategories>
  </div>
</template>

<style lang="scss">
.section-products {
  &__personage {
    max-width: 600px;
    object-fit: contain;

    @media screen and (max-width: 1024px) {
      max-width: 300px;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__img {
    width: 100%;
  }
}
</style>
