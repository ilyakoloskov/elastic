<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="stickers stickers__container">
    <div class="stickers__title-block" v-if="!isDesktop">
      <h2 class="stickers__title">Стикеры</h2>
      <h4 class="stickers__title-description"><span class="stickers__text-accent">яркий способ </span>сделать
        обычные вещи необычными</h4>
    </div>
    <div class="stickers__image-container">
      <div class="stickers__bg-wrapper">
        <h4 class="stickers__bg-text">
          маленькие истории на
          больших поверхностях
        </h4>
        <TheLogotipBig class="stickers__logo" v-if="isDesktop" />
        <img class="stickers__bg-img" src="@assets/images/stickers2-pattern.png" alt="">
      </div>
      <img class="stickers__main-img" src="@assets/images/stickers2-image.png" alt="">
    </div>
    <div class="stickers__info-block">
      <div class="stickers__title-block" v-if="isDesktop">
        <h2 class="stickers__title">Стикеры</h2>
        <h4 class="stickers__title-description"><span class="stickers__text-accent">яркий способ </span>сделать
          обычные вещи необычными</h4>
      </div>
      <div class="stickers__description-block">
        <p class="stickers__description1">
          Каждый стикер, оставленный в том или ином месте (или подаренный кому‑то) является ненавязчивой рекламой
          бренда, что приводит к большей узнаваемости компании. Если приложить стикер к заказу, это обязательно оставит
          хорошее впечатление. У клиента возникнут приятные ассоциации.
          На стикере можно разместить москота или логотип компании. Мы воплотим в жизнь любой индивидуальный дизайн
          по вашим пожеланиям.
        </p>
        <h5 class="stickers__description2">
          Ваше трепетное отношение к оценит любой клиент!
        </h5>
      </div>
      <img class="stickers__smile-img" src="@assets/images/stickers2-smile.png" alt="">
    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image-container {
    aspect-ratio: 1.59;
    position: relative;
    @include lte($md) {
      aspect-ratio: 431/292;
    }
  }

  &__logo {
    position: absolute;
    top: -26%;
    right: 10%;
  }

  &__bg-wrapper {
    position: absolute;
    bottom: 8%;
    width: 100%;
    height: 64%;
    @include lte($md) {
      height: 73%;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__bg-text {
    position: absolute;
    display: flex;
    justify-content: center;
    right: 4%;
    text-align: center;
    writing-mode: vertical-rl;
    rotate: 180deg;
    height: 100%;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 0;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
    @include lte($sm) {
      font-size: var(--font-size-s);
      right: 2%;
    }
  }

  &__main-img {
    position: absolute;
    width: 78%;
    left: 9%;
    top: 0;
    @include lte($md) {
      width: 83%;
      left: 7%;
    }
  }

  &__info-block {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    @include lt($lg) {
      flex-direction: column;
      gap: 20px
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    @include lt($lg) {
      gap: 14px;
      align-items: center;
    }
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__title-description {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @include gte($lg) {
      max-width: 570px;
    }
    @include lt($lg) {
      gap: 14px
    }

  }

  &__description1 {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__description2 {
    color: var(--color-primary-200);
  }

  &__smile-img {
    width: 200px;
    @include lt($lg) {
      align-self: center;
      width: 120px;
    }
  }
}
</style>