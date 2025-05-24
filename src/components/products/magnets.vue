<script setup lang="ts">

import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()

</script>

<template>
  <TheContainer size="lg" class="magnets magnets__container">
    <div class="magnets__title-block" v-if="!isDesktop">
      <h2 class="magnets__title">магниты</h2>
      <h4 class="magnets__title-description"><span class="magnets__text-accent">ХОРОШИЕ ВОСПОМИНАНИЯ <br></span>В
        ПОВСЕДНЕВНОМ ПРОСТРАНСТВЕ</h4>
    </div>
    <div class="magnets__image-container">
        <TheLogotipBig class="magnets__logo" v-if="isDesktop"/>
      <div class="magnets__bg-wrapper">
        <h4 class="magnets__bg-text">
          УНИВЕРСАЛЬНЫЙ <br>СУВЕНИР ДЛЯ<br>
          ЛЮБОГО ПОВОДА
        </h4>
        <img class="magnets__bg-img" src="@assets/images/magnets-pattern.png" alt="">
      </div>
      <img class="magnets__main-img" src="@assets/images/fridge.png" alt="">
      <img class="magnets__main-img2" src="@assets/images/fridge-sticker.png" alt="">
    </div>
    <div class="magnets__info-block">
      <div class="magnets__title-block" v-if="isDesktop">
        <h2 class="magnets__title">магниты</h2>
        <h4 class="magnets__title-description"><span class="magnets__text-accent">ХОРОШИЕ ВОСПОМИНАНИЯ <br></span>В
          ПОВСЕДНЕВНОМ ПРОСТРАНСТВЕ</h4>
      </div>
      <div class="magnets__description-block">
        <p class="magnets__description1">
          Магниты — это не только украшение на холодильник, это карта ваших эмоций и приключений. Они напоминают
          о тёплых днях, ярких впечатлениях и моментах, которые хочется сохранить в памяти.
          <br> <br>
          Персонализированные магниты
          с логотипом компании, добрым пожеланием или уникальным дизайном станут приятным сюрпризом для близких
          или партнёров.ассоциации.
        </p>
        <h5 class="magnets__description2">
          Это не просто аксессуары, а эмоции, которые можно потрогать.
        </h5>
      </div>
      <img class="magnets__smile-img" src="@assets/images/magnets-smile.png" alt="">
    </div>
  </TheContainer>
</template>

<style lang="scss">
.magnets {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image-container {
    aspect-ratio: 1160/653;
    position: relative;
    @include lte($lg) {
      aspect-ratio: 433/277;
    }
  }

  &__logo {
    position: absolute;
    right: 0;
    bottom: 35%;
  }

  &__bg-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 90%;
    height: 79%;
    @include lte($lg) {
      width: 100%
    }
  }

  &__bg-text {
    position: absolute;
    left: 4%;
    bottom: 8%;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
    @include lte($sm) {
      font-size: var(--font-size-s);
      bottom: 1%;
      left: 3%;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    width: 52%;
    left: 32%;
    bottom: 0;
    @include lte($lg) {
      width: 60%;
      left: 37%;
    }
  }

  &__main-img2 {
    position: absolute;
    width: 44%;
    top: 1%;
    left: 2%;
    @include lte($lg) {
      width: 51%;
      top: 0;
    }
  }


  &__info-block {
    display: flex;
    gap: 40px;
    align-items: center;
    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    @include lt($lg) {
      align-items: center;
      text-align: center;
      gap: 14px
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
    width: 209px;
    @include lt($lg) {
      width: 112px;
    }
  }


}
</style>