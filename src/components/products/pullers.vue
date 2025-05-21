<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="pullers pullers__container">

    <div>
      <TheLogotipBig class="pullers__logo" />
    </div>
    <div class="pullers__bg-wrapper">
      <img class="pullers__bg-img" src="@assets/images/pullers-pattern.png" alt="">
    </div>
    <img class="pullers__main-img" src="@assets/images/briefcase.png" alt="">
    <img class="pullers__main-img2" src="@assets/images/pullers-sticker.png" alt="">
    <div class="pullers__info-block">
      <div class="pullers__title-block">
        <h2 class="pullers__title">ПУЛЛЕРЫ</h2>
        <h4 class="pullers__title-description">
          <span class="pullers__text-accent">ФУНКЦИОНАЛЬНЫЙ АКССЕСУАР</span>, ДЛЯ УДОБНОГО УПРАВЛЕНИЯ МОЛНИЕЙ</h4>
      </div>
      <div class="pullers__description-block">
        <p>
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
  </TheContainer>
</template>

<style lang="scss">
.pullers {
  &__container {
    height: 1151px;
    position: relative;
  }

  &__logo {
    position: absolute;
    top: 266px;
    left: 103px;
    rotate: -45deg;
  }

  &__bg-wrapper {
    position: absolute;
    top: 88px;
    left: 167px;
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
    max-width: 730px;
    left: 460px;
    top: 0;
  }

  &__main-img2 {
    position: absolute;
    max-width: 645px;
    top: 640px;
    left: 474px;
  }


  &__info-block {
    position: absolute;
    top: 675px;
    left: 120px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 335px;
  }

  &__title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
  }

  &__title-description {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__description-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 570px;
  }

  &__description2 {
    color: var(--color-primary-200);
  }


}
</style>