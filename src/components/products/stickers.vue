<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="stickers stickers__container">
    <div class="stickers__image-container">
      <TheLogotip class="stickers__logo" />
      <div class="stickers__bg-wrapper">
        <h4 class="stickers__bg-text">
          мощный инструмент, <br>для узнаваемости вашего бренда
        </h4>
        <img class="stickers__bg-img" src="../../assets/images/stickers-pattern.png" alt="">
      </div>
      <img class="stickers__main-img" src="@assets/images/free-tablet-mockup.png" alt="">
    </div>
    <div class="stickers__info-block">
      <div class="stickers__title-block">
        <h2 class="stickers__title">Стикеры</h2>
        <h4 class="stickers__title-description"><span class="stickers__text-accent">ПОВЫШАЮТ лояльность</span> клиента С ПЕРВОГО СООБЩЕНИЯ</h4>
      </div>
      <div class="stickers__description-block">
        <p>
          Корпоративные стикеры для социальных сетей нужны для живой и эмоциональной переписки внутри коллектива, с
          клиентами, партнерами. Персонализированные стикеры выделят ваш бренд и сделают его узнаваемым. Иллюстрации
          пригодятся для создания мерча и сувениров.
        </p>
        <h5 class="stickers__description2">
          Классный стикерпак - это готовый вирусный контент с вашей айдентикой, который мгновенно разлетится за пределы чата!
        </h5>
      </div>
      <img class="stickers__smile-img" src="@assets/images/stickers-smile.png" alt="">
    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__image-container {
    height: 860px;
    position: relative;
  }

  &__logo {
    position: absolute;
    top: 122px;
    left: 176px;
  }

  &__bg-wrapper {
    position: absolute;
    top: 258px;
    width: 100%;
    height: 444px;
  }

  &__bg-text {
    position: absolute;
    left: 44px;
    top: 60px;
    @include title(var(--color-primary-20), var(--font-size-lg), var(--font-family-primary));
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__main-img {
    position: absolute;
    max-width: 891px;
    right: 50px
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