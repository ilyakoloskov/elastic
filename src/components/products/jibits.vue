<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="jibits jibits__container">
    <div class="jibits__info-block">
      <div class="jibits__title-wrapper">
        <div class="jibits__title">
          <TheLogotip />
          <h2 class="jibits__title-text">ДЖИБИТСЫ</h2>
        </div>
      </div>
      <h4 class="jibits__description-title">ОТЛИЧНЫЙ СПОСОБ ПОДЧЕРКНУТЬ <span
        class="jibits__text-accent">СВОЮ <br>ИНДИВИДУАЛЬНОСТЬ</span></h4>
      <p2>
        Джибитсы— это стильные, функциональные и съёмные украшения, которые крепятся на кроксы, браслеты или чехлы
        для телефона, добавляя индивидуальности вашему образу. Они созданы для тех, кто любит выделяться и ценит детали.
        <br><br>
        Вы можете выбирать джибитсы под настроение: сегодня это яркие фрукты, завтра — космические планеты,
        а послезавтра — нежные цветы.
      </p2>
      <h5 class="jibits__end-text">
        Лёгкие, прочные и влагостойкие, они созданы для активной жизни!
      </h5>
      <img src="@assets/images/jibits-smile.png" alt="" class="jibits__smile" />
    </div>
    <div class="jibits__image-wrapper">
      <div class="jibits__bg">
        <div class="jibits__bg-wrapper">
          <img class="jibits__bg-img" src="@assets/images/jibits-pattern.png" alt="">
          <h4 class="jibits__bg-text">ЯРКИЙ АКЦЕНТ ПОД РАЗНОЕ <br> НАСТРОЕНИЕ</h4>
        </div>
        <img src="@assets/images/phone.png" alt="" class="jibits__image2" />
        <img src="@assets/images/shutterstock.png" alt="" class="jibits__image1" />
        <img src="@assets/images/phone-sticker.png" alt="" class="jibits__image3" />
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.jibits {
  &__container {
    display: flex;
    gap: 24px
  }

  &__image-wrapper {
    position: relative;
    padding: 88px 172px 0 119px;
  }

  &__bg {
    width: 514px;
    height: 844px;
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: 370px;
    left: 22px;
    width: 661px;
    height: 401px;
  }

  &__image2 {
    position: absolute;
    top: 51px;
    left: 19px;
    max-width: 543px;
  }

  &__image3 {
    position: absolute;
    top: 0;
    right: 40px;
    max-width: 451px;
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
    margin-top: 24px;
  }
}
</style>