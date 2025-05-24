<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="pullers pullers__container">
    <div class="pullers__title-block" v-if="!isDesktop">
      <h2 class="pullers__title">ПУЛЛЕРЫ</h2>
      <h4 class="pullers__title-description">
        <span class="pullers__text-accent">ФУНКЦИОНАЛЬНЫЙ АКССЕСУАР</span>,<br /> ДЛЯ УДОБНОГО УПРАВЛЕНИЯ МОЛНИЕЙ</h4>
    </div>
    <div class="pullers__image-container">
      <TheLogotipBig class="pullers__logo" v-if="isDesktop" />
      <div class="pullers__bg-wrapper">
        <img class="pullers__bg-img" src="@assets/images/pullers-pattern.png" alt="">
      </div>
      <img class="pullers__main-img" src="@assets/images/briefcase.png" alt="">
      <img class="pullers__main-img2" src="../../assets/images/pullers-sticker-smile.png" alt="" v-if="isDesktop">
      <img class="pullers__main-img3" src="../../assets/images/pullers-sticker.png" alt="" v-if="!isDesktop">
      <img class="pullers__smile-img" src="@assets/images/pullers-smile.png" alt="" v-if="!isDesktop">
      <div class="pullers__info-block" v-if="isDesktop">
        <div class="pullers__title-block">
          <h2 class="pullers__title">ПУЛЛЕРЫ</h2>
          <h4 class="pullers__title-description">
            <span class="pullers__text-accent">ФУНКЦИОНАЛЬНЫЙ АКССЕСУАР</span>, ДЛЯ УДОБНОГО УПРАВЛЕНИЯ МОЛНИЕЙ</h4>
        </div>
        <div class="pullers__description-block">
          <p class="pullers__description1">
            Пуллер представляет собой небольшой элемент, который прикрепляется к молнии на одежде или сумке. Его главная
            функция — обеспечить удобное управление молнией.
            <br><br>
            Пуллер — способ выделиться, как для брендов,
            так и для любителей персонализировать акссесуары. Индивидуальный дизайн или необычная форма делают продукт
            запоминающимся.
          </p>
          <h5 class="pullers__description2">
            Маленькая, но незаменимая деталь, сделает жизнь проще и приятнее!
          </h5>
        </div>
      </div>
    </div>
    <div class="pullers__description-block" v-if="!isDesktop">
      <p class="pullers__description1">
        Пуллер представляет собой небольшой элемент, который прикрепляется к молнии на одежде или сумке. Его главная
        функция — обеспечить удобное управление молнией.
        <br><br>
        Пуллер — способ выделиться, как для брендов,
        так и для любителей персонализировать акссесуары. Индивидуальный дизайн или необычная форма делают продукт
        запоминающимся.
      </p>
      <h5 class="pullers__description2">
        Маленькая, но незаменимая деталь, сделает жизнь проще и приятнее!
      </h5>
    </div>
  </TheContainer>

</template>

<style lang="scss">
.pullers {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__image-container {
    aspect-ratio: 1076/1151;
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__logo {
    position: absolute;
    top: 24%;
    left: 1.5%;
    rotate: -45deg;
  }

  &__bg-wrapper {
    position: absolute;
    right: 0;
    top: 7.8%;
    width: 92.3%;
    @include lt($lg) {
      top: 7.8%;
      width: 90%;
    }
  }

  &__bg-text {
    position: absolute;
    right: 60px;
    bottom: 20px;
    text-transform: uppercase;
    max-width: 170px;
    text-align: center;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    width: 64%;
    top: 0;
    right: 0.97%;
    @include lt($lg) {
      width: 62.5%;
    }
  }

  &__main-img2 {
    position: absolute;
    width: 62%;
    bottom: 4%;
    right: 1.5%;
  }

  &__main-img3 {
    position: absolute;
    width: 46%;
    bottom: 0;
    right: 0;
  }

  &__smile-img {
    position: absolute;
    width: 30%;
    left: 3%;
    bottom: 5%;
  }


  &__info-block {
    position: absolute;
    bottom: 0;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include lt($lg) {
      position: static;
    }
    @include gte($lg) {
      max-width: 335px;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    @include lte($lg) {
      align-items: center;
      text-align: center;
      gap: 14px;
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


}
</style>