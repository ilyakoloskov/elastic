<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="keyrings keyrings__container">
    <div class="keyrings__title-block" v-if="!isDesktop">
      <h2 class="keyrings__title">БРЕЛоКИ</h2>
      <h4 class="keyrings__title-description">ЛЕГКО <span class="keyrings__text-accent">ПЕРСОНАЛИЗИРУЙТЕ <br></span> ПОВСЕДНЕВНЫЕ АКССЕСУАРЫ</h4>
    </div>
    <div class="keyrings__image-container">
      <TheLogotipBig class="keyrings__logo" v-if="isDesktop" />
      <div class="keyrings__bg-wrapper">
        <h4 class="keyrings__bg-text">
          УНИКАЛЬНОЕ ДОПОЛНЕНИЕ <br>К ЛЮБОМУ ОБРАЗУ
        </h4>
        <img class="keyrings__bg-img" src="@assets/images/keyrings-pattern.png" alt="">
      </div>
      <img class="keyrings__main-img" src="@assets/images/bag.png" alt="" v-if="isDesktop">
      <img class="keyrings__main-img" src="@assets/images/bag2.png" alt="" v-if="!isDesktop">
      <img class="keyrings__main-img2" src="@assets/images/keyring.png" alt="">
    </div>
    <div class="keyrings__info-block">
      <div class="keyrings__smile-img-wrapper">
        <img class="keyrings__smile-img" src="@assets/images/keyrings-smile.png" alt="">
      </div>
      <div class="keyrings__title-block" v-if="isDesktop">
        <h2 class="keyrings__title">БРЕЛоКИ</h2>
        <h4 class="keyrings__title-description">ЛЕГКО <br><span
          class="keyrings__text-accent">ПЕРСОНАЛИЗИРУЙТЕ <br></span> ПОВСЕДНЕВНЫЕ АКССЕСУАРЫ</h4>
      </div>
      <div class="keyrings__description-block">
        <p class="keyrings__description1">
          Когда достают ключи, взгляд падает на брелок, который был выбран. Он вызывает улыбку и напоминает о важных
          моментах. Брелок — часть настроения и характера.
          <br><br>
          Брелоки очень практичны. Они легко крепятся и не теряют
          своего вида даже при активном использовании
        </p>
        <h5 class="keyrings__description2">
          Это отличный подарок. Корпоративный сувенир, романтичный аксессуар или забавный подарок другу.
          Их выбирают с душой, чтобы они дарили эмоции.
        </h5>
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.keyrings {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image-container {
    aspect-ratio: 1160/757;
    position: relative;
    @include lt($lg) {
      aspect-ratio: 431/300;
    }
  }

  &__logo {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
  }

  &__bg-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 61%;
  }

  &__bg-text {
    position: absolute;
    right: 5%;
    bottom: 3%;
    text-transform: uppercase;
    max-width: 170px;
    text-align: center;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
    @include lte($sm) {
      font-size: var(--font-size-s);
      right: 0;
      max-width: 150px;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    height: 100%;
    //width: 67%;
    left: 0;
    bottom: 0;
    @include lt($lg) {
      //width: 65%;
    }
  }

  &__main-img2 {
    position: absolute;
    width: 40%;
    bottom: 17%;
    right: 0;
    @include lt($lg) {
      width: 45%;
      bottom: 22%;
    }
  }


  &__info-block {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    @include lt($md) {
      gap: 0;
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
      text-align: center;
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
      max-width: 450px;
    }
    @include lt($lg) {
      order: 1;
      gap: 14px;
    }
  }

  &__description1 {
    font-size: 14px;
  }

  &__description2 {
    color: var(--color-primary-200);
  }

  &__smile-img-wrapper {
    @include lt($lg) {
      width: 100%;
      order: 2;
      display: flex;
      justify-content: center;
    }
  }

  &__smile-img {
    width: 100%;
    max-width: 205px;
    @include lt($lg) {
      max-width: 120px;
    }
  }


}
</style>