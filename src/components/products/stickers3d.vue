<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="stickers3d stickers3d__container">
    <div class="stickers3d__title-block">
      <div class="stickers3d__title-wrapper" v-if="!isDesktop">
        <div class="stickers3d__title">
          <h2 class="stickers3d__title-text">3d-стикеры</h2>
        </div>
      </div>
      <h4 class="stickers3d__description-title" v-if="!isDesktop">СОЗДАЮТ <br>
        <span class="stickers3d__text-accent">ЭМОЦИОНАЛЬНУЮ СВЯЗЬ</span><br>
        С ПЕРВОГО касания</h4>
    </div>
    <div class="stickers3d__info-block">
      <div class="stickers3d__title-wrapper" v-if="isDesktop">
        <div class="stickers3d__title">
          <TheLogotipBig />
          <h2 class="stickers3d__title-text">3d-стикеры</h2>
        </div>
      </div>
      <h4 class="stickers3d__description-title" v-if="isDesktop">СОЗДАЮТ <br>
        <span class="stickers3d__text-accent">ЭМОЦИОНАЛЬНУЮ СВЯЗЬ</span><br>
        С ПЕРВОГО касания</h4>
      <p2 class="stickers3d__description-text">
        3D стикеры — это мощный инструмент продвижения. Их объёмная фактура притягивает внимание и вызывает желание
        прикоснуться, создавая эмоциональную связь с вашим брендом. Клиенты запомнят вас не только визуально, но и
        тактильно — через приятные ощущения от контакта со стикером. Это маркетинг, который не кричит о себе, а мягко,
        но настойчиво встраивается в привычки аудитории.
      </p2>
      <h5 class="stickers3d__end-text">
        С 3D стикерами ваш бренд становится не просто видимым — он становится осязаемым.
      </h5>
      <img src="@assets/images/stickers3d-smile.png" alt="" class="stickers3d__smile" />
    </div>
    <div class="stickers3d__image-wrapper">
      <div class="stickers3d__bg-wrapper">
        <h4 class="stickers3d__bg-text">Тактильный брендинг,<br> оставляющий след в памяти</h4>
        <img src="@assets/images/stickers3d-pattern.png" alt="" class="stickers3d__bg-img" />
      </div>
      <img src="@assets/images/stickers3d-phones.png" alt="" class="stickers3d__phones-img" />
      <img src="@assets/images/stickers3d-mockup.png" alt="" class="stickers3d__mockup-img" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers3d {
  &__container {
    display: flex;
    gap: 24px;
    @include lt($lg) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }

  &__image-wrapper {
    position: relative;
    aspect-ratio: 804/889;
    max-width: 804px;
    width: 100%;
    height: 100%;
    @include lt($lg) {
      order: 1;
      aspect-ratio: 432/534;
    }
  }

  &__bg-wrapper {
    position: absolute;
    width: 60%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @include lt($lg) {
      width: 79%;
      height: 95%;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__phones-img {
    position: absolute;
    width: 120%;
    bottom: 2%;
    left: -10%;
  }

  &__mockup-img {
    position: absolute;
    width: 80%;
    top: -7%;
    left: 15%;
  }


  &__bg-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    bottom: 4%;
    color: var(--color-primary-20);
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-transform: uppercase;
    max-width: 355px;
    width: 100%;
    @include lt($lg) {
      font-size: var(--font-size-m);
    }
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include gte($lg) {
      max-width: 331px;
    }
    @include lt($lg) {
      order: 2;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    gap: 14px
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
    @include gte($lg) {
      margin-top: 24px;
    }
    @include lt($md) {
      font-size: 30px;
    }
  }

  &__description-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include gte($lg) {
      margin: 40px 0;
    }
    @include lt($lg) {
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
    width: 317px;
    margin-top: 20px;
    @include lt($lg) {
      width: 140px;
    }
  }
}
</style>