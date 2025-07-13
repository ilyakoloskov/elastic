<script setup>
import IconTelegram from '@/assets/icons/telegram.svg'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'

import { useMedia } from '@/composables/useMedia'

const { handleOpenModal } = inject('stateModalForm')

const { isDesktop } = useMedia()

const showFormModal = () => {
  handleOpenModal(true)
}

const router = useRouter()
const isMainPage = computed(() => {
  return router.currentRoute.value.fullPath === '/'
})
</script>

<template>
  <header class="app-header app-header_is-sticky">
    <AppContainer class="app-header__container">
      <template v-if="isDesktop">
        <NuxtLink
          class="app-header__logo"
          :class="{
            'app-header__logo_disabled': isMainPage,
          }"
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
          <AppButton
            class="app-header__button"
            @click="showFormModal"
            >Оставить заявку</AppButton
          >
        </div>
      </template>

      <template v-else>
        <NuxtLink
          class="app-header__logo"
          to="/"
        >
          <TheLogotip size="sm" />
        </NuxtLink>

        <div class="app-header__inner">
          <AppButton
            class="app-header__button"
            @click="showFormModal"
            >Оставить заявку</AppButton
          >

          <AppNavigationMobile />
        </div>
      </template>
    </AppContainer>
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
    z-index: 10;
  }

  &__container {
    @include flex(space-between);
    position: relative;
  }

  &__inner {
    @include flex(center);
    gap: 20px;
  }

  &__logo {
    cursor: pointer;
  }

  &__logo_disabled {
    cursor: auto;
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
