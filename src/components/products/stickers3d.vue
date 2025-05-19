<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="stickers3d stickers3d__container">
    <div class="stickers3d__info-block">
      <div class="stickers3d__title-wrapper">
        <div class="stickers3d__title">
          <TheLogotip />
          <h2 class="stickers3d__title-text">3d-стикеры</h2>
        </div>
      </div>
      <h4 class="stickers3d__description-title">СОЗДАЮТ <br>
        <span class="stickers3d__text-accent">ЭМОЦИОНАЛЬНУЮ СВЯЗЬ</span><br>
        С ПЕРВОГО касания</h4>
      <p2>
        3D стикеры — это мощный инструмент продвижения. Их объёмная фактура притягивает внимание и вызывает желание
        прикоснуться, создавая эмоциональную связь с вашим брендом. Клиенты запомнят вас не только визуально, но и
        тактильно — через приятные ощущения от контакта со стикером. Это маркетинг, который не кричит о себе, а мягко,
        но настойчиво встраивается в привычки аудитории.
      </p2>
      <h5 class="stickers3d__end-text">
        С 3D стикерами ваш бренд становится не просто видимым — он становится осязаемым.
      </h5>
      <img src="@assets/images/stickers3d-smile.png" alt="" class="stickers3d__smile" />
    </div>
    <div class="stickers3d__image-wrapper">
      <h4 class="stickers3d__bg-text">Тактильный брендинг,<br> оставляющий след в памяти</h4>
      <img src="@assets/images/stickers3d.png" alt="" class="stickers3d__image" />

    </div>
  </TheContainer>
</template>

<style lang="scss">
.stickers3d {
  &__container {
    display: flex;
    gap: 24px
  }

  &__image-wrapper {
    position: relative;
    min-width: 804px;
    height: 889px;
  }

  &__image {
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
    width: 500px;
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
    width: 317px;
    margin-top: 20px;
  }
}
</style>