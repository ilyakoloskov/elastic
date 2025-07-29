<script setup lang="ts"></script>
<template>
  <section class="section-advantages">
    <AppContainer class="section-advantages__container">
      <div class="section-advantages__info">
        <h2 class="section-advantages__title">
          Маскот — инструмент, который работает на ваш бизнес
        </h2>
        <h5 class="section-advantages__slogan">Не просто «картинка». Это актив, который:</h5>
        <div class="section-advantages__items">
          <div class="section-advantages__item section-advantages__item_dark">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
          <div class="section-advantages__item">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
          <div class="section-advantages__item">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
          <div class="section-advantages__item section-advantages__item_dark">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
          <div class="section-advantages__item section-advantages__item_green">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
          <div class="section-advantages__item">
            <h6 class="section-advantages__item-title">в 3 раза лучше запоминается</h6>
            <p class="section-advantages__item-description">
              По данным System1 Group, бренд с маскотом запоминается в 3 раза лучше, чем без него.
              Персонаж цепляет внимание и остаётся в памяти.
            </p>
          </div>
        </div>
      </div>
      <img
        class="section-advantages__img"
        src="@/assets/images/advantages-img.png"
        alt=""
      />
    </AppContainer>
  </section>
</template>
<style lang="scss">
.section-advantages {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    padding-top: var(--spacing-5xl);
    padding-bottom: var(--spacing-5xl);
  }

  &__title {
    margin-top: 24px;
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    @include lt($md) {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 30px;
    }
  }

  &__slogan {
    margin-top: 24px;
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-secondary));
    color: var(--color-primary-100);
    text-transform: uppercase;
    @include lt($md) {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 18px;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    margin-top: 24px;
  }

  &__item {
    padding: var(--spacing-m);
    color: var(--color-primary-10);
    background-color: var(--color-primary-100);
    border-radius: var(--border-radius-xxl);
  }

  &__item_dark {
    background-color: #555555;
  }

  &__item_green {
    background-color: var(--color-accent-200);
  }

  &__item-title {
    margin-bottom: var(--spacing-m);
    font-size: var(--font-size-lg);
    font-weight: 700;
    text-transform: uppercase;
  }

  &__item-description {
    font-size: var(--font-size-m);
  }

  &__img {
    width: 100%;
  }
}
</style>
