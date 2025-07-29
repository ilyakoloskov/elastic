<script setup lang="ts">
import Telegram from '@/assets/icons/telegram.svg?component'
import Whatsapp from '@/assets/icons/whatsapp.svg?component'

import { useGlobals } from '@/composables/useGlobals'
const { getSocials, getPhone, getAddress } = useGlobals()

const router = useRouter()
const isMainPage = computed(() => {
  return router.currentRoute.value.fullPath === '/'
})
</script>

<template>
  <footer class="app-footer">
    <AppContainer class="app-footer__container">
      <div class="app-footer__main-block">
        <NuxtLink
          to="/"
          class="app-footer__logo"
          :class="{ 'app-footer__logo_disabled': isMainPage }"
        >
          <TheLogotip />
        </NuxtLink>
        <div class="app-footer__info">
          <div class="app-footer__contacts">
            <div class="app-footer__messengers">
              <a
                class="app-footer__social"
                :href="getSocials.telegram"
              >
                <Telegram />
              </a>
              <a
                class="app-footer__social"
                :href="getSocials.whatsApp"
              >
                <Whatsapp />
              </a>
            </div>
            <a
              class="app-footer__phone"
              :href="getPhone.link"
            >
              {{ getPhone.phone }}
            </a>
            <div>{{ getPhone.caption }}</div>
          </div>
          <div class="app-footer__contacts">
            <div class="app-footer__address">
              {{ getAddress.address }}
            </div>
            <div>{{ getAddress.caption }}</div>
          </div>
        </div>
      </div>
      <hr class="app-footer__hr" />
      <div class="app-footer__links">
        <div>© 2025 Elastic. Все права защищены</div>
        <div>Пользовательское соглашение</div>
        <div>Политика конфиденциальности</div>
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss">
.app-footer {
  height: var(--footer-height);
  background-color: var(--color-primary-200);

  &__logo_disabled {
    cursor: auto;
  }

  &__messengers,
  &__phone,
  &__address {
    color: var(--color-primary-20);
  }

  &__main-block,
  &__info,
  &__links {
    @include flex(space-between);
    padding: 30px 0 40px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      align-items: start;
      padding: 16px 0;
    }
  }

  &__info {
    display: flex;
    gap: 32px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    max-width: 250px;
    height: auto;
  }

  &__messengers {
    display: flex;
    gap: 20px;
  }

  &__phone {
    font-size: 24px;
    font-weight: 700;
  }

  &__phone:hover {
    color: var(--color-accent-200);
  }

  &__hr {
    color: var(--color-primary-50);
  }

  &__links {
    display: flex;
    gap: 32px;
    margin-top: var(--spacing-lg);
  }

  &__social {
    color: var(--color-primary-10);
  }

  &__social:hover {
    color: var(--color-accent-200);
  }
}
</style>
