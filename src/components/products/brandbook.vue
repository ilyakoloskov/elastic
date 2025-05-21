<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="brand-book brand-book__container">
    <div class="brand-book__image-wrapper">
      <div class="brand-book__bg">
        <div class="brand-book__bg-wrapper">
          <img class="brand-book__bg-img" src="../../assets/images/pattern-brandbook.png" alt="">
          <h4 class="brand-book__bg-text">руководство использования <br> корпоративного стиля</h4>
        </div>
        <img src="@assets/images/brandbook1.png" alt="" class="brand-book__image1" />
        <img src="@assets/images/brandbook2.png" alt="" class="brand-book__image2" />
      </div>
    </div>
    <div class="brand-book__info-block">
      <div class="brand-book__title-wrapper">
        <div class="brand-book__title">
        <TheLogotipBig />
        <h2 class="brand-book__title-text">брендбук</h2>
        </div>
      </div>
      <h4 class="brand-book__description-title">Философия и ценности <span
        class="brand-book__text-accent">вашего бренда</span></h4>
      <p2>
        Брендбук помогает правильно и внятно презентовать идентичность бренда. Кроме того, когда все элементы и
        пояснения по применению айдентики собраны в одном месте, они работают как корпоративная энциклопедия.
        <br>

        Когда компании потребуется сделать упаковку для товара или выпустить печатные материалы, примеры в брендбуке
        позволят сделать макеты дизайна по аналогии.
      </p2>
      <h5 class="brand-book__end-text">
        Это оптимизирует время работы и расходы!
      </h5>
      <img src="@assets/images/brandbook-smile.png" alt="" class="brand-book__smile" />
    </div>
  </TheContainer>
</template>

<style lang="scss">
.brand-book {
  &__container {
    display: flex;
    gap: 50px
  }

  &__image-wrapper {
    position: relative;
    padding: 113px 67px 0 118px;
  }

  &__bg {
    width: 595px;
    height: 904px;
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image1 {
    position: absolute;
    top: 100px;
    left: 80px;
    max-width: 630px;
    rotate: -19deg;
  }

  &__image2 {
    position: absolute;
    top: 390px;
    left: 65px;
    max-width: 655px;
    rotate: 17deg;
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
    margin-top: 40px;
  }
}
</style>