<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="patches patches__container">
    <div>
      <div class="patches__title-wrapper" v-if="!isDesktop">
        <div class="patches__title">
          <h2 class="patches__title-text">ПАТЧИ</h2>
        </div>
      </div>
      <h4 class="patches__description-title" v-if="!isDesktop">ДЕТАЛЬ, КОТОРАЯ ОТРАЖАЕТ <br>ВАШ <span
        class="patches__text-accent">ДУХ ПРИКЛЮЧЕНИЙ</span></h4>
    </div>

    <div class="patches__image-wrapper">
      <div class="patches__bg-wrapper">
        <img class="patches__bg-img" src="@assets/images/patches-pattern.png" alt="">
        <h4 class="patches__bg-text">ОРИГИНАЛЬНЫЙ АКССЕСУАР <br> ДЛЯ АКТИВНОГО ОТДЫХА</h4>
      </div>
      <img src="@assets/images/patches-sticker.png" alt="" class="patches__image1" />

    </div>
    <div class="patches__info-block">
      <div class="patches__title-wrapper" v-if="isDesktop">
        <div class="patches__title">
          <TheLogotipBig />
          <h2 class="patches__title-text">ПАТЧИ</h2>
        </div>
      </div>
      <h4 class="patches__description-title" v-if="isDesktop">ДЕТАЛЬ, КОТОРАЯ ОТРАЖАЕТ ВАШ <span
        class="patches__text-accent">ДУХ ПРИКЛЮЧЕНИЙ</span></h4>
      <div>
        <p2 class="patches__description-text">
          Патчи — это не только украшение для вашей одежды или рюкзака, это символы ваших самых ярких моментов. Каждая
          деталь напоминает о приключениях.
          <br><br>
          Патчи легко крепятся к любой липучке и надёжно держатся. Вы сможете индиви дуализировать свою экипировку этим
          уникальным акссесуаром.
        </p2>
        <h5 class="patches__end-text">
          Патчи не только добавят яркости, но и расскажут вашу историю: о захватываю щих маршрутах и покорённых
          вершинах.
        </h5>
      </div>
      <img src="@assets/images/patches-smile.png" alt="" class="patches__smile" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.patches {
  &__container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    @include lt($lg) {
      flex-direction: column;
      align-items: center;
      gap: 20px
    }
  }

  &__image-wrapper {
    aspect-ratio: 687/886;
    position: relative;
    max-width: 687px;
    width: 100%;
    height: 100%;
    @include lte($lg) {
      aspect-ratio: 432/584;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 68%;
    @include lte($lg) {
      width: 58%;
    }
  }

  &__bg-wrapper {
    position: absolute;
    width: 74%;
    right: 0;
    bottom: 0;
    @include lt($lg) {
      width: 100%;
      height: 100%;
    }
  }

  &__bg-text {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 25px;
    color: var(--color-primary-20);
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-transform: uppercase;
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include gte($lg) {
      max-width: 330px;
    }
    @include lt($lg) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__title-wrapper {
    @include gte($lg) {
      align-self: flex-start;
    }

  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title-text {
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    @include gte($lg) {
      margin-top: 24px;
    }
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__description-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    margin: 40px 0;
    @include lt($lg) {
      margin: 20px 0 0;
      text-align: center;
    }
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description-text {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__end-text {
    color: var(--color-primary-200);
    font-weight: 700;
    margin-top: 20px;
  }

  &__smile {
    align-self: center;
    width: 120px;
    @include gte($lg) {
      margin-top: 40px;
      width: 203px;
    }
  }
}
</style>