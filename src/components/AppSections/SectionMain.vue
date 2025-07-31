<script setup>
const props = defineProps({
  data: Object,
})
</script>

<template>
  <section class="main-screen">
    <AppContainer class="main-screen__container">
      <img
        alt=""
        class="main-screen__img"
        :src="data.banner"
      />

      <div class="main-screen__info">
        <div class="main-screen__inner">
          <h1 class="main-screen__title">
            {{ data.title }}
          </h1>
          <p class="main-screen__description">
            {{ data.text }}
          </p>
        </div>
        <div class="main-screen__advantages">
          <div
            class="advantages-item"
            v-for="item in data.advantages"
          >
            <strong class="advantages-item__title">{{ item.title }}</strong>
            <p class="advantages-item__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.main-screen {
  &__container {
    @include flex(center);
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-top: var(--spacing-2xl);
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: var(--spacing-md);
    align-self: stretch;

    max-width: var(--container-width-xl);

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  &__title {
    @include title();
  }

  &__description {
    max-width: 700px;
    font-size: var(--font-size-md);
    font-weight: 300;
  }

  &__advantages {
    @include flex(center);
    gap: var(--spacing-md);

    @media screen and (max-width: 768px) {
      justify-content: start;
    }
  }
}

.advantages-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &__title {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-xl);
    color: var(--color-accent-100);
  }

  &__description {
    font-size: var(--font-size-md);
    font-weight: 300;

    @media screen and (max-width: 480px) {
      font-size: var(--font-size-m);
    }
  }
}
</style>
