<script setup lang="ts">

import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="stickers-tg stickers-tg__container">
    <div class="stickers-tg__title-block" v-if="!isDesktop">
      <h2 class="stickers-tg__title">Стикеры</h2>
      <h4 class="stickers-tg__title-description"><span class="stickers-tg__text-accent">ПОВЫШАЮТ лояльность<br></span>
        клиента С ПЕРВОГО СООБЩЕНИЯ</h4>
    </div>
    <div class="stickers-tg__image-container">
      <div class="stickers-tg__bg-wrapper">
        <TheLogotipBig class="stickers-tg__logo" v-if="isDesktop" />
        <h4 class="stickers-tg__bg-text">
          мощный инструмент <br>для узнаваемости вашего бренда
        </h4>
        <img class="stickers-tg__bg-img" src="../../assets/images/stickers-pattern.png" alt="">
      </div>
      <img class="stickers-tg__main-img" src="@assets/images/free-tablet-mockup.png" alt="">
    </div>
    <div class="stickers-tg__info-block">
      <div class="stickers-tg__title-block" v-if="isDesktop">
        <h2 class="stickers-tg__title">Стикеры</h2>
        <h4 class="stickers-tg__title-description"><span class="stickers-tg__text-accent">ПОВЫШАЮТ лояльность</span>
          клиента С ПЕРВОГО СООБЩЕНИЯ</h4>
      </div>
      <div class="stickers-tg__description-block">
        <p class="stickers-tg__description1">
          Корпоративные стикеры для социальных сетей нужны для живой и эмоциональной переписки внутри коллектива, с
          клиентами, партнерами. Персонализированные стикеры выделят ваш бренд и сделают его узнаваемым. Иллюстрации
          пригодятся для создания мерча и сувениров.
        </p>
        <h5 class="stickers-tg__description2">
          Классный стикерпак - это готовый вирусный контент с вашей айдентикой, который мгновенно разлетится за пределы
          чата!
        </h5>
      </div>
        <div class="stickers-tg__smile-img-wrapper">
        <img class="stickers-tg__smile-img" src="@assets/images/stickers-smile.png" alt="">
        </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers-tg {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__image-container {
    //height: 860px;
    max-width: 1160px;
    width: 100%;
    position: relative;
    aspect-ratio: 1.35;
  }

  &__logo {
    position: absolute;
    left: 15%;
    top: -31%;
  }

  &__bg-wrapper {
    position: absolute;
    bottom: 18%;
    width: 100%;
    //height: 444px;
    height: 52%;
    @include lte($md) {
      height: 62%;
    }
  }

  &__bg-text {
    position: absolute;
    left: 4%;
    top: 14%;
    font-weight: 700;
    max-width: 360px;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
    @include lt($lg) {
      font-size: var(--font-size-m);
      max-width: 260px;
    }
    @include lt($md) {
      font-size: var(--font-size-sm);
      max-width: 170px;
      left: 3%;
      top: 12%;
    }
    @include lte($xs) {
      font-size: var(--font-size-s);
      max-width: 135px;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    //max-width: 891px;
    width: 76%;
    right: 4%;
    bottom: 0;
    @include lte($md) {
      width: 80%;
      right: 0;
    }
  }

  &__info-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @include lte($md) {
      gap: 5px
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    @include lt($lg) {
      align-items: center;
      margin-bottom: 20px;
      gap: 14px;
    }
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
    @include lt($md) {
      font-size: 30px;
    }
  }

  &__title-description {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
    @include lt($lg) {
      text-align: center;
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
    width: 100%;
    @include gte($lg) {
      max-width: 570px;
    }
  }

  &__description1 {
    font-size: var(--font-size-sm);
  }

  &__description2 {
    color: var(--color-primary-200);
  }

  &__smile-img {
    width: 100%;
  }

  &__smile-img-wrapper {
    max-width: 180px;
    width: 100%;
    @include lte($sm) {
      flex-shrink: 2;
    }

  }
}
</style>