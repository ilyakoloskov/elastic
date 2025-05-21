<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="coloring coloring__container">
    <div class="coloring__image-container">
      <div style="width: 96px; height: 96px;">
        <TheLogotipBig class="coloring__logo" />
      </div>
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
      <div class="coloring__title-block">
        <h2 class="coloring__title">Раскраски</h2>
        <h4 class="coloring__title-description"><span class="coloring__text-accent">сделайте свой <br> бренд ближе <br></span>через
          творчество</h4>
      </div>
      <div class="coloring__description-block">
        <p>
          Раскраски — эффективный маркетинговый инструмент, который работает на узнаваемость бренда через творчество и
          эмоции.
          В отличие от стандартной рекламы, они вовлекают клиента в интерактивный формат взаимодействия с брендом. Пока
          человек раскрашивает фирменные узоры или персонажей, он непроизвольно запоминает логотипы и ассоциации.
        </p>
        <h5 class="coloring__description2">
          Дополнительный плюс – гибкость применения: их можно использовать как промоподарки, часть event-мероприятий или даже как элемент упаковки.
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
    flex-direction: column;
  }

  &__image-container {
    height: 717px;
    position: relative;
  }

  &__logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &__bg-wrapper {
    position: absolute;
    top: 123px;
    width: 100%;
    height: 575px;
  }

  &__bg-text {
    position: absolute;
    right: 50px;
    bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__main-img {
    position: absolute;
    max-width: 1008px;
    left: 79px;
    top: 50px
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
    width: 180px;
  }


}
</style>