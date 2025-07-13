<script setup>
import { useNavigation } from '@/composables/useNavigationStore'

const { design } = useNavigation()
</script>

<template>
  <div class="section-design">
    <SectionCategories
      :direction="left"
      :navigation="design"
    >
      <template #img>
        <img
          alt=""
          class="section-design__img"
          src="@assets/images/categories-2.png"
        />
      </template>
      <template #personage>
        <img
          alt=""
          class="section-design__personage"
          src="@assets/images/categories-personage-2.png"
        />
      </template>
      <template #title>Lorem ipsum</template>
      <template #subtitle
        >Ut enim ad minim veniam, quis nostrud
        <b class="section-design__b">exercitation</b>
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
.section-design {
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
