<script setup lang="ts">
import IconTelegram from '@/assets/icons/telegram.svg'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'
import ListButton from '@components/ListButton.vue'

interface AppHeaderProps {
  isSticky: boolean
  isScroll: boolean
}

const props = withDefaults(defineProps<AppHeaderProps>(), { isSticky: true, isScroll: true })
</script>

<template>
  <header
    :class="[
      'app-header',
      { 'app-header_is-sticky': props.isSticky, 'app-header__is-scroll': props.isScroll },
    ]"
  >
    <TheContainer class="app-header__container">
      <NuxtLink
        class="app-header__logo-link"
        to="/"
      >
        <TheLogotip />
      </NuxtLink>
      <TheNavigation class="app-header__navigation" />
      <div class="app-header__actions">
        <div class="app-header__inner">
          <a
            class="app-header__action"
            href="#"
            ><IconTelegram class="app-header__icon"
          /></a>
          <a
            class="app-header__action"
            href="#"
            ><IconWhatsApp class="app-header__icon"
          /></a>
        </div>
        <AppButton class="app-header__button">Оставить заявку</AppButton>
      </div>
    </TheContainer>
  </header>
</template>

<style lang="scss">
.app-header {
  @include flex(space-between);

  height: var(--header-height);
  background-color: var(--color-primary-10);

  transition: var(--transition);

  &_is-sticky {
    position: sticky;
    top: 0;
    z-index: 9;
  }

  &__is-scroll {
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
    transition: var(--transition);
  }

  &__container {
    @include flex(space-between);
    position: relative;
  }

  &__inner {
    @include flex(center);
    gap: 20px;
  }

  &__actions {
    @include flex(center);
    gap: 30px;
  }

  &__icon {
    color: var(--color-primary-200);
    transition: var(--transition-hover);
  }

  &__icon:hover {
    color: var(--color-accent-200);
    transition: var(--transition-hover);
  }
}
</style>
