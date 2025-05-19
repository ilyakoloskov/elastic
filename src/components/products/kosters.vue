<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="kosters kosters__container">
    <div class="kosters__info-block">
      <div class="kosters__title-wrapper">
        <div class="kosters__title">
          <TheLogotip />
          <h2 class="kosters__title-text">костеры</h2>
        </div>
      </div>
      <h4 class="kosters__description-title"><span class="kosters__text-accent">ЗАЩИТИТ ЛЮБУЮ ПОВЕРХНОСТЬ</span> ОТ
        ВЛАГИ, ТЕМПЕРАТУРЫ, ЦАРАПИН</h4>
      <p2>
        Костер представляет собой многора зовую подставку, разработанную для защиты поверхностей столов от капель,
        пятен, царапин и перепадов температур.
        <br><br>
        Костеры играют значительную роль в декоре и могут быть персонализи рованы для отражения и повышения узнаваемости
        бренда или для украшения пространства.
      </p2>
      <h5 class="kosters__end-text">
        Костер — эффективное средство для про движения бренда, поскольку на них можно нанести уникальный дизайн, который
        привлечёт внимание потребителей.
      </h5>
      <img src="@assets/images/kosters-smile.png" alt="" class="kosters__smile" />
    </div>
    <div class="kosters__image-wrapper">
      <div class="kosters__bg">
        <div class="kosters__bg-wrapper">
          <img class="kosters__bg-img" src="@assets/images/kosters-pattern.png" alt="">
          <h4 class="kosters__bg-text">СТИЛЬНЫЙ АТРИБУТ <br>ДЛЯ ЛЮБОГО ПРОСТРАНСТВА</h4>
        </div>
        <img src="@assets/images/koster.png" alt="" class="kosters__image" />
      </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.kosters {
  &__container {
    display: flex;
    gap: 100px
  }

  &__image-wrapper {
    position: relative;
    padding: 112px 61px 0 0;
  }

  &__bg {
    width: 626px;
    height: 777px;
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 665px;
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