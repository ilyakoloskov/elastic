<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="patches patches__container">
    <div class="patches__image-wrapper">
      <div class="patches__bg">
        <div class="patches__bg-wrapper">
          <img class="patches__bg-img" src="@assets/images/patches-pattern.png" alt="">
          <h4 class="patches__bg-text">ОРИГИНАЛЬНЫЙ АКССЕСУАР <br> ДЛЯ АКТИВНОГО ОТДЫХА</h4>
        </div>
        <img src="@assets/images/patches-sticker.png" alt="" class="patches__image1" />
      </div>
    </div>
    <div class="patches__info-block">
      <div class="patches__title-wrapper">
        <div class="patches__title">
          <TheLogotip />
          <h2 class="patches__title-text">ПАТЧИ</h2>
        </div>
      </div>
      <h4 class="patches__description-title">ДЕТАЛЬ, КОТОРАЯ ОТРАЖАЕТ ВАШ <span
        class="patches__text-accent">ДУХ ПРИКЛЮЧЕНИЙ</span></h4>
      <p2>
        Патчи — это не только украшение для вашей одежды или рюкзака, это символы ваших самых ярких моментов. Каждая
        деталь напоминает о приключениях.
        <br><br>
        Патчи легко крепятся к любой липучке и надёжно держатся. Вы сможете индиви дуализировать свою экипировку этим
        уникальным акссесуаром.
      </p2>
      <h5 class="patches__end-text">
        Патчи не только добавят яркости, но и расскажут вашу историю: о захватываю щих маршрутах и покорённых вершинах.
      </h5>
      <img src="@assets/images/patches-smile.png" alt="" class="patches__smile" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.patches {
  &__container {
    display: flex;
    gap: 130px
  }

  &__image-wrapper {
    position: relative;
    padding: 131px 0 0 180px;
  }

  &__bg {
    width: 507px;
    height: 844px;
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: 78px;
    left: 0;
    max-width: 465px;
  }

  &__bg-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__bg-text {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 25px;
    color: var(--color-primary-20);
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-transform: uppercase;
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    margin: 40px 0;
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__end-text {
    color: var(--color-primary-200);
    font-weight: 700;
    margin-top: 20px;
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 40px;
  }
}
</style>