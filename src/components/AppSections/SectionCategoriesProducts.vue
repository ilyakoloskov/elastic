<script setup>
import { useNavigation } from '@/composables/useNavigationStore'

const { products } = useNavigation()
</script>

<template>
  <div class="section-products">
    <SectionCategories
      direction="left"
      :navigation="products"
    >
      <template #img>
        <img
          alt=""
          class="section-products__img"
          src="@assets/images/categories-1.png"
        />
      </template>
      <template #personage>
        <img
          alt=""
          class="section-products__personage"
          src="@assets/images/categories-personage.png"
        />
      </template>
      <template #title>Lorem ipsum</template>
      <template #subtitle
        >Ut enim ad minim veniam, quis nostrud
        <b class="section-products__b">exercitation</b>
      </template>
      <template #description
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</template
      >
    </SectionCategories>
  </div>
</template>

<style lang="scss">
.section-products {
  &__b {
    color: var(--color-accent-200);
  }

  &__personage {
    max-width: 600px;
  }

  &__img {
    width: 100%;
  }
}
</style>
