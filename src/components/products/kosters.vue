<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()
</script>

<template>
  <TheContainer size="lg" class="kosters kosters__container">
    <div class="kosters__title-block">
    <div class="kosters__title-wrapper" v-if="!isDesktop">
      <div class="kosters__title">
        <h2 class="kosters__title-text">костеры</h2>
      </div>
    </div>
    <h4 class="kosters__description-title" v-if="!isDesktop"><span class="kosters__text-accent">ЗАЩИТИТ ЛЮБУЮ ПОВЕРХНОСТЬ <br></span>
      ОТ
      ВЛАГИ, ТЕМПЕРАТУРЫ, ЦАРАПИН</h4>
    </div>
    <div class="kosters__info-block">
      <div class="kosters__title-wrapper" v-if="isDesktop">
        <div class="kosters__title">
          <TheLogotipBig />
          <h2 class="kosters__title-text">костеры</h2>
        </div>
      </div>
      <h4 class="kosters__description-title" v-if="isDesktop"><span class="kosters__text-accent">ЗАЩИТИТ ЛЮБУЮ ПОВЕРХНОСТЬ</span>
        ОТ
        ВЛАГИ, ТЕМПЕРАТУРЫ, ЦАРАПИН</h4>
      <div>
        <p2 class="kosters__description-text">
          Костер представляет собой многора зовую подставку, разработанную для защиты поверхностей столов от капель,
          пятен, царапин и перепадов температур.
          <br><br>
          Костеры играют значительную роль в декоре и могут быть персонализи рованы для отражения и повышения
          узнаваемости
          бренда или для украшения пространства.
        </p2>
        <h5 class="kosters__end-text">
          Костер — эффективное средство для про движения бренда, поскольку на них можно нанести уникальный дизайн,
          который
          привлечёт внимание потребителей.
        </h5>
      </div>
      <img src="@assets/images/kosters-smile.png" alt="" class="kosters__smile" />
    </div>
    <div class="kosters__image-wrapper">
      <div class="kosters__bg-wrapper">
        <img class="kosters__bg-img" src="@assets/images/kosters-pattern.png" alt="">
        <h4 class="kosters__bg-text">СТИЛЬНЫЙ АТРИБУТ <br>ДЛЯ ЛЮБОГО ПРОСТРАНСТВА</h4>
      </div>
      <img src="@assets/images/koster.png" alt="" class="kosters__image" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.kosters {
  &__container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    @include lt($lg) {
      flex-direction: column;
    }
  }

  &__image-wrapper {
    position: relative;
    aspect-ratio: 686/889;
    max-width: 686px;
    width: 100%;
    height: 100%;
    @include lt($lg) {
      order: 1;
      aspect-ratio: 431/369;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    width: 97%;
    @include lt($lg) {
      width: 65%;
      right: 11%;
    }
  }

  &__bg-wrapper {
    position: absolute;
    width: 91%;
    right: 9%;
    bottom: 0;
    @include lt($lg) {
      width: 100%;
      height: 89%;
      right: 0;
    }
  }

  &__bg-text {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 4%;
    color: var(--color-primary-20);
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-transform: uppercase;
    @include lte($md) {
      font-size: var(--font-size-sm);
      bottom: 1%;
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
      flex-direction: row;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
    }
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
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
  }

  &__description-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include gte($lg) {
      margin: 40px 0;
    }
    @include lte($lg) {
      text-align: center;
    }

  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__kosters__description-text {
    font-size: var(--font-size-sm);
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