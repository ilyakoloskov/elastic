<template>
  <footer class="app-footer">
    <TheContainer class="app-footer__container">
      <div class="app-footer__main-block">
        <TheLogotip/>
        <div class="app-footer__info-block">
        <div class="app-footer__contacts">
          <div class="app-footer__messengers">
            <Telegram/>
            <Whatsapp/>
          </div>
          <div class="app-footer__phone">
            +7 987 077-10-41
          </div>
          <div>
            Ваш персональный менеджер Екатерина
          </div>
        </div>
        <div class="app-footer__contacts">
          <div class="app-footer__address">
            г. Пенза, ул. Дружбы, 6 (Технопарк “Яблочков”), оф. 415
          </div>
          <div>
            пн-пт с 9:00 до 17:00
          </div>
        </div>
        </div>
      </div>
      <hr class="app-footer__hr"/>
      <div class="app-footer__links">
        <div>© 2025 Elastic. Все права защищены</div>
        <div>Пользовательское соглашение</div>
        <div>Политика конфиденциальности</div>
      </div>
    </TheContainer>
  </footer>
</template>

<style lang="scss">
.app-footer {
  height: var(--footer-height);
  background-color: var(--color-primary-200);

  &__messengers, &__phone, &__address {
    color: var(--color-primary-20);
  }

  &__main-block {
    @include flex(space-between);
    padding: 30px 0 40px;
  }

  &__info-block {
    display: flex;
    gap: 32px;
  }

  &__contacts {
    height: auto;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }

  &__messengers {
    display: flex;
    gap: 20px;
  }

  &__phone {
    font-weight: 700;
    font-size: 24px
  }

  &__hr {
    color: var(--color-primary-50);
  }

  &__links {
    display: flex;
    margin-top: var(--spacing-lg);
    gap: 32px;
  }
}
</style>
<script setup lang="ts">
import Telegram from '@/assets/icons/telegram.svg?component'
import Whatsapp from '@/assets/icons/whatsapp.svg?component'
</script>