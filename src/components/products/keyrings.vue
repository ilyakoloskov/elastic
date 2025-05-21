<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="keyrings keyrings__container">
    <div class="keyrings__image-container">
      <div>
        <TheLogotipBig class="keyrings__logo" />
      </div>
      <div class="keyrings__bg-wrapper">
        <h4 class="keyrings__bg-text">
          УНИКАЛЬНОЕ ДОПОЛНЕНИЕ <br>К ЛЮБОМУ ОБРАЗУ
        </h4>
        <img class="keyrings__bg-img" src="@assets/images/keyrings-pattern.png" alt="">
      </div>
      <img class="keyrings__main-img" src="@assets/images/bag.png" alt="">
      <img class="keyrings__main-img2" src="@assets/images/keyring.png" alt="">
    </div>
    <div class="keyrings__info-block">
      <img class="keyrings__smile-img" src="@assets/images/keyrings-smile.png" alt="">
      <div class="keyrings__title-block">
        <h2 class="keyrings__title">БРЕЛоКИ</h2>
        <h4 class="keyrings__title-description">ЛЕГКО <br><span
          class="keyrings__text-accent">ПЕРСОНАЛИЗИРУЙТЕ <br></span> ПОВСЕДНЕВНЫЕ АКССЕСУАРЫ</h4>
      </div>
      <div class="keyrings__description-block">
        <p>
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
  }

  &__image-container {
    height: 766px;
    position: relative;
    margin-bottom: 28px;
  }

  &__logo {
    position: absolute;
    top: 173px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__bg-wrapper {
    position: absolute;
    top: 298px;
    width: 100%;
    height: 468px;
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
    max-width: 773px;
    left: 0;
    top: 0;
  }

  &__main-img2 {
    position: absolute;
    max-width: 509px;
    top: 158px;
    right: 0;
  }


  &__info-block {
    display: flex;
    gap: 80px;
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
    width: 205px;
  }


}
</style>