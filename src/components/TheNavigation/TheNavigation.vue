<script setup lang="ts">
import { useMedia } from '@/composables/useMedia'
import { useGlobals } from '@/composables/useGlobals'

const { isDesktop } = useMedia()
const { getNavigation } = useGlobals()
</script>

<template>
  <ClientOnly>
    <nav
      :class="[
        `the-navigation`,
        {
          'the-navigation_mobile': !isDesktop,
        },
      ]"
    >
      <ul :class="[`the-navigation__list`, { 'the-navigation__list_is-mobile': !isDesktop }]">
        <li class="the-navigation__item">
          <TheNavigationLink
            :category="getNavigation.designItems.url"
            :component="!isDesktop ? 'div' : 'NuxtLink'"
            :items="getNavigation.designItems.items"
            :label="getNavigation.designItems.label"
          />
        </li>

        <li class="the-navigation__item">
          <TheNavigationLink
            :category="getNavigation.productsItems.url"
            :component="!isDesktop ? 'div' : 'NuxtLink'"
            :items="getNavigation.productsItems.items"
            :label="getNavigation.productsItems.label"
          />
        </li>

        <li class="the-navigation__item">
          <NuxtLink
            :class="[
              `the-navigation-link`,
              `the-navigation-link_default`,
              { 'the-navigation-link_mobile': !isDesktop },
            ]"
            :to="`${getNavigation.about.url}`"
            >{{ getNavigation.about.title }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </ClientOnly>
</template>

<style lang="scss">
.the-navigation {
  display: flex;
  height: var(--header-height);

  &_mobile {
    height: auto;
    overflow: hidden;
  }

  &_default {
    border: none;
  }

  &__item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }

  &__list {
    @include flex(center);
    justify-content: space-between;
    // gap: var(--spacing-lg);
  }

  &__list_is-mobile {
    flex-direction: column;
    gap: 0;
    align-items: start;
    width: 100%;

    .the-navigation__item {
      width: 100%;
      height: 100%;
      font-size: 18px;
      font-weight: 400;
      color: var(--color-primary-200);
    }
  }

  &__link {
    display: flex;
    min-width: 128px;
    height: 100%;
    padding: 33px 0;

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
