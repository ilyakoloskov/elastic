<script setup lang="ts">

import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()

</script>

<template>
  <TheContainer size="lg" class="brand-book brand-book__container">
    <div class="brand-book__image-wrapper">
        <div class="brand-book__bg-wrapper">
          <img class="brand-book__bg-img" src="../../assets/images/pattern-brandbook.png" alt="">
          <h4 class="brand-book__bg-text">руководство использования <br> корпоративного стиля</h4>
          <img src="@assets/images/brandbook1.png" alt="" class="brand-book__image1" />
          <img src="@assets/images/brandbook2.png" alt="" class="brand-book__image2" />
        </div>
    </div>
    <div class="brand-book__info-block1">
      <div class="brand-book__title-wrapper">
        <div class="brand-book__title">
          <TheLogotipBig v-if="isDesktop" />
          <h2 class="brand-book__title-text">брендбук</h2>
        </div>
      </div>
      <h4 class="brand-book__description-title">Философия и ценности <br><span
        class="brand-book__text-accent">вашего бренда</span></h4>
    </div>
    <div class="brand-book__info-block2">
      <p2 class="brand-book__description">
        Брендбук помогает правильно и внятно презентовать идентичность бренда. Кроме того, когда все элементы и
        пояснения по применению айдентики собраны в одном месте, они работают как корпоративная энциклопедия.
        <br>

        Когда компании потребуется сделать упаковку для товара или выпустить печатные материалы, примеры в брендбуке
        позволят сделать макеты дизайна по аналогии.
      </p2>
      <h5 class="brand-book__end-text">
        Это оптимизирует время работы и расходы!
      </h5>
      <img src="@assets/images/brandbook-smile.png" alt="" class="brand-book__smile" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.brand-book {
  &__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    @include gte($lg) {
      height: 900px;
    }
    @include gte($xl) {
      height: 1017px;
    }
    @include lt($lg) {
      align-items: center;
    }
  }

  &__image-wrapper {
    padding: 113px 67px 0 118px;
    position: relative;
    @include lte($xl) {
    }
    @include lt($lg) {
      margin: 75px auto 20px;
      order: 2;
      padding: 0;
    }
    @include lte($md) {
      margin: 20px auto 20px;
      order: 2;
      padding: 0;
    }
  }

  &__bg-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 595px;
    //max-height: 904px;
    aspect-ratio: 0.66;
    @include lt($md) {
      aspect-ratio: 0.74;
    }
    @include lt($xl) {
      max-width: 500px;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: -26px;
    left: -30px;
    //max-width: 630px;
    width: 105%;
    rotate: -19deg;
    @include lte($md) {
      left: 8%;
      top: 7%;
      width: 85%;
    }
  }

  &__image2 {
    position: absolute;
    top: 272px;
    left: -43px;
    width: 110%;
    rotate: 17deg;
    @include lte($md) {
      left: 3%;
      top: 31%;
      width: 90%;
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
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__info-block1, &__info-block2 {
    @include gte($lg) {
      max-width: 330px;
    }
    @include lt($lg) {
      align-items: center;
      max-width: 595px;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__info-block1 {
    @include lt($lg) {
     order: 1
    }
  }
  &__info-block2 {
    @include lt($lg) {
      order: 3
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
    @include lt($md) {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 30px;
    }
  }

  &__description-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    margin: 40px 0;
    @include lt($md) {
      margin: 0;
      font-size: var(--font-size-sm);
    }
    @include lt($lg) {
      text-align: center;
    }
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description {
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__end-text {
    color: var(--color-primary-200);
    font-weight: 700;
    margin-top: 20px;
    align-self: flex-start;
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 40px;
  }
}
</style>