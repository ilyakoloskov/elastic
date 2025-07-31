<script setup>
import { useGlobals } from '@/composables/useGlobals'
const { getNavigation } = useGlobals()

const props = defineProps({
  data: Object,
})
</script>

<template>
  <div class="section-design">
    <SectionCategories
      :direction="left"
      :navigation="getNavigation.designItems"
    >
      <template #img>
        <img
          alt=""
          class="section-design__img"
          :src="data.banner"
        />
      </template>
      <template #personage>
        <img
          alt=""
          class="section-design__personage"
          :src="data.personage"
        />
      </template>
      <template #title>{{ data.title }}</template>
      <template #subtitle>
        <div v-html="data.subtitle" />
      </template>
      <template #description>{{ data.text }}</template>
    </SectionCategories>
  </div>
</template>

<style lang="scss">
.section-design {
  &__b {
    color: var(--color-accent-200);
  }

  &__personage {
    width: 100%;
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
