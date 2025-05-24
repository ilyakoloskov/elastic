<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="coloring coloring__container">
    <div class="coloring__title-block" v-if="!isDesktop">
      <h2 class="coloring__title">Раскраски</h2>
      <h4 class="coloring__title-description"><span class="coloring__text-accent">сделайте свой бренд ближе <br></span>через
        творчество</h4>
    </div>
    <div class="coloring__image-container">
      <TheLogotipBig class="coloring__logo" v-if="isDesktop"/>
      <div class="coloring__bg-wrapper">
        <h4 class="coloring__bg-text">
          медитация, которая <br />
          всегда будет под рукой
        </h4>
        <img class="coloring__bg-img" src="@assets/images/coloring-pattern.png" alt="">
      </div>
      <img class="coloring__main-img" src="@assets/images/colorong-image.png" alt="">
    </div>
    <div class="coloring__info-block">
      <div class="coloring__title-block" v-if="isDesktop">
        <h2 class="coloring__title">Раскраски</h2>
        <h4 class="coloring__title-description"><span class="coloring__text-accent">сделайте свой <br> бренд ближе <br></span>через
          творчество</h4>
      </div>
      <div class="coloring__description-block">
        <p class="coloring__description1">
          Раскраски — эффективный маркетинговый инструмент, который работает на узнаваемость бренда через творчество и
          эмоции.
          В отличие от стандартной рекламы, они вовлекают клиента в интерактивный формат взаимодействия с брендом. Пока
          человек раскрашивает фирменные узоры или персонажей, он непроизвольно запоминает логотипы и ассоциации.
        </p>
        <h5 class="coloring__description2">
          Дополнительный плюс – гибкость применения: их можно использовать как промоподарки, часть event-мероприятий или
          даже как элемент упаковки.
        </h5>
      </div>
      <img class="coloring__smile-img" src="@assets/images/coloring-smile.png" alt="">
    </div>
  </TheContainer>
</template>

<style lang="scss">
.coloring {
  &__container {
    display: flex;
    flex-wrap: wrap;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image-container {
    aspect-ratio: 1157/728;
    position: relative;
    width: 100%;
    @include lte($md) {
      aspect-ratio: 431/296;
    }
  }

  &__logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &__bg-wrapper {
    position: absolute;
    bottom: 4%;
    width: 100%;
    height: 79%;
    @include lte($md) {
      height: 87%;
      bottom: 0;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__bg-text {
    position: absolute;
    right: 4%;
    bottom: 3%;
    text-align: center;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
    @include lte($sm) {
      font-size: var(--font-size-s);
      bottom: 1%;
      right: 1%;
    }
  }

  &__main-img {
    position: absolute;
    width: 87%;
    left: 7%;
    bottom: 0;
    @include lte($md) {
      width: 96%;
      left: 0;
      bottom: 5%;
    }
  }

  &__info-block {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    width: 100%;
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
      gap: 14px;
      align-items: center;
      width: 100%;
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
    width: 180px;
    align-self: center;
    @include lt($lg) {
      width: 125px;
    }
  }


}
</style>