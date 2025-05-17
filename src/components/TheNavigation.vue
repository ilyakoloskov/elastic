<template>
  <nav class="the-navigation">
    <ul class="the-navigation__list">
      <li class="the-navigation__item">
        <NuxtLink
          class="the-navigation__link"
          to="/about"
          >About</NuxtLink
        >
      </li>
      <li class="the-navigation__item">
        <NuxtLink
          class="the-navigation__link"
          to="/contacts"
          >Contacts</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.the-navigation {
  &__list {
    @include flex(center);
    gap: var(--spacing-s);
    justify-content: space-between;
  }

  &__link {
    color: var(--color-primary-50);
  }

  &__link_accent {
    color: var(--color-primary-400);
  }
}
</style>
