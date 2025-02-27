<template>
  <header class="app-header">
    <TheContainer class="app-header__container">
      <NuxtLink
        class="app-header__logo-link"
        to="/"
      >
        <TheLogotip />
      </NuxtLink>
      <TheNavigation />
    </TheContainer>
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  height: var(--header-height);
  background-color: var(--color-accent-900);

  &__container {
    @include flex(space-between);
  }
}
</style>
