<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="jibits jibits__container">
    <div v-if="!isDesktop">
      <h2 class="jibits__title-text">ДЖИБИТСЫ</h2>
      <h4 class="jibits__description-title">ОТЛИЧНЫЙ СПОСОБ ПОДЧЕРКНУТЬ <br><span
        class="jibits__text-accent">СВОЮ ИНДИВИДУАЛЬНОСТЬ</span></h4>
    </div>
    <div class="jibits__info-block">
      <div v-if="isDesktop">
        <div class="jibits__title-wrapper">
          <div class="jibits__title">
            <TheLogotipBig />
            <h2 class="jibits__title-text">ДЖИБИТСЫ</h2>
          </div>
        </div>
        <h4 class="jibits__description-title">ОТЛИЧНЫЙ СПОСОБ ПОДЧЕРКНУТЬ <span
          class="jibits__text-accent">СВОЮ <br>ИНДИВИДУАЛЬНОСТЬ</span></h4>
      </div>
      <p2 class="jibits__description">
        Джибитсы— это стильные, функциональные и съёмные украшения, которые крепятся на кроксы, браслеты или чехлы
        для телефона, добавляя индивидуальности вашему образу. Они созданы для тех, кто любит выделяться и ценит детали.
        <br><br>
        Вы можете выбирать джибитсы под настроение: сегодня это яркие фрукты, завтра — космические планеты,
        а послезавтра — нежные цветы.
      </p2>
      <h5 class="jibits__end-text">
        Лёгкие, прочные и влагостойкие, они созданы для активной жизни!
      </h5>
      <img src="@assets/images/jibits-smile.png" alt="" class="jibits__smile" />
    </div>
    <div class="jibits__image-wrapper">
        <div class="jibits__bg-wrapper">
          <img class="jibits__bg-img" src="@assets/images/jibits-pattern.png" alt="">
          <h4 class="jibits__bg-text">ЯРКИЙ АКЦЕНТ <br v-if="!isDesktop"> ПОД РАЗНОЕ <br> НАСТРОЕНИЕ</h4>
        </div>
        <img src="@assets/images/phone.png" alt="" class="jibits__image2" />
        <img src="@assets/images/shutterstock.png" alt="" class="jibits__image1" />
        <img src="@assets/images/phone-sticker.png" alt="" class="jibits__image3" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.jibits {
  &__container {
    display: flex;
    align-items: center;
    gap: 24px;
    @include lt($lg) {
      flex-direction: column;
    }
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image-wrapper {
    aspect-ratio: 805/932;
    position: relative;
    width: 100%;
    height: 100%;
    @include lt($lg) {
      order: 1;
    }
    @include lte($md) {
      aspect-ratio: 431/525;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__image1 {
    position: absolute;
    bottom: 12%;
    right: 13%;
    width: 82%;
    @include lte($md) {
      width: 92%;
      bottom: 10%;
      right: 7%;
    }
  }

  &__image2 {
    position: absolute;
    top: 5%;
    left: 2%;
    width: 62%;
    @include lte($md) {
      width: 66%;
    }
  }

  &__image3 {
    position: absolute;
    top: 1%;
    right: 1%;
    width: 62%;
    @include lte($md) {
      right: 0;
      width: 60%;
    }
  }

  &__bg-wrapper {
    position: absolute;
    width: 64%;
    height: 91%;
    left: 15%;
    bottom: 0;
  }

  &__bg-text {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 4%;
    color: var(--color-primary-20);
    font-weight: 700;
    font-size: var(--font-size-lg);
    @include lte($md) {
      font-size: var(--font-size-sm);
      bottom: 3%;
    }
    @include lte($sm) {
      font-size: var(--font-size-s);
      bottom: 1%;
    }
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include lt($lg) {
      order: 2;
      gap: 10px
    }
    @include gte($lg) {
      max-width: 331px;
    }
  }

  &__title-wrapper {
    display: flex;
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title-text {
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    margin-top: 24px;

    @include lt($lg) {
      margin: 0;
      text-align: center;
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
      text-align: center;
      margin: 20px 0 0;
    }
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description {
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__end-text {
    color: var(--color-primary-200);
    font-weight: 700;
    margin-top: 20px;
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 24px;
    @include lt($lg) {
      width: 125px;
    }
  }
}
</style>