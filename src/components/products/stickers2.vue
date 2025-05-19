<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="stickers2 stickers2__container">
    <div class="stickers2__image-container">
      <TheLogotip class="stickers2__logo" />
      <div class="stickers2__bg-wrapper">
        <h4 class="stickers2__bg-text">
          маленькие истории на <br />
          больших поверхностях
        </h4>
        <img class="stickers2__bg-img" src="@assets/images/stickers2-pattern.png" alt="">
      </div>
      <img class="stickers2__main-img" src="@assets/images/stickers2-image.png" alt="">
    </div>
    <div class="stickers2__info-block">
      <div class="stickers2__title-block">
        <h2 class="stickers2__title">Стикеры</h2>
        <h4 class="stickers2__title-description"><span class="stickers2__text-accent">яркий способ </span>сделать
          обычнЫе вещи необычнымИ</h4>
      </div>
      <div class="stickers2__description-block">
        <p>
          Каждый стикер, оставленный в том или ином месте (или подаренный кому‑то) является ненавязчивой рекламой
          бренда, что приводит к большей узнаваемости компании. Если приложить стикер к заказу, это обязательно оставит
          хорошее впечатление. У клиента возникнут приятные ассоциации.
          На стикере можно разместить москота или логотип компании. Мы воплотим в жизнь любой индивидуальный дизайн
          по вашим пожеланиям.
        </p>
        <h5 class="stickers2__description2">
          Ваше трепетное отношение к оценит любой клиент!
        </h5>
      </div>
      <img class="stickers2__smile-img" src="@assets/images/stickers2-smile.png" alt="">
    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers2 {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__image-container {
    height: 731px;
    position: relative;
  }

  &__logo {
    position: absolute;
    top: 79px;
    right: 118px;
  }

  &__bg-wrapper {
    position: absolute;
    top: 204px;
    width: 100%;
    height: 468px;
  }

  &__bg-text {
    position: absolute;
    display: flex;
    justify-content: center;
    right: 40px;
    text-align: center;
    writing-mode: vertical-rl;
    rotate: 180deg;
    height: 100%;
    text-transform: uppercase;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__main-img {
    position: absolute;
    max-width: 862px;
    left: 102px;
    top: 30px
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