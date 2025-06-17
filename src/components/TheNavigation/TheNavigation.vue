<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigationStore'

const { products, design } = useNavigation()
</script>

<template>
  <ClientOnly>
    <nav class="the-navigation">
      <ul class="the-navigation__list">
        <li class="the-navigation__item>">
          <TheNavigationLink
            :category="products.category"
            :items="products.items"
            :label="products.label"
          />
        </li>
        <li class="the-navigation__item>">
          <TheNavigationLink
            :category="design.category"
            :items="design.items"
            :label="design.label"
          />
        </li>
        <li class="the-navigation__item">
          <NuxtLink
            class="the-navigation__link"
            to="/#about"
            >О нас</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </ClientOnly>
</template>

<style lang="scss">
.the-navigation {
  &__list {
    @include flex(center);
    gap: var(--spacing-lg);
    justify-content: space-between;
  }

  &__link {
    color: var(--color-primary-200);
  }

  &__link:hover {
    color: var(--color-accent-200);
  }

  &__link_accent {
    color: var(--color-primary-400);
  }
}
</style>
