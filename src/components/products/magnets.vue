<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="magnets magnets__container">
    <div class="magnets__image-container">
      <div>
        <TheLogotipBig class="magnets__logo" />
      </div>
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
      <div class="magnets__title-block">
        <h2 class="magnets__title">магниты</h2>
        <h4 class="magnets__title-description"><span class="magnets__text-accent">ХОРОШИЕ ВОСПОМИНАНИЯ <br></span>В
          ПОВСЕДНЕВНОМ ПРОСТРАНСТВЕ</h4>
      </div>
      <div class="magnets__description-block">
        <p>
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
  }

  &__image-container {
    height: 653px;
    position: relative;
    margin-bottom: 41px;
  }

  &__logo {
    position: absolute;
    right: 0;
    bottom: 280px
  }

  &__bg-wrapper {
    position: absolute;
    top: 140px;
    right: 119px;
    width: 1041px;
    height: 513px;
  }

  &__bg-text {
    position: absolute;
    left: 50px;
    bottom: 50px;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    max-width: 605px;
    right: 180px;
    top: 15px
  }

  &__main-img2 {
    position: absolute;
    max-width: 509px;
    top: 7px;
    left: 30px;
  }


  &__info-block {
    display: flex;
    gap: 40px;
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

  &__smile-img {
    width: 209px;
  }


}
</style>