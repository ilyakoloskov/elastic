<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>

<template>
  <section class="magnets">
    <AppContainer
      class="magnets__container"
      size="lg"
    >
      <img
        alt=""
        class="magnets__image"
        src="@assets/images/magnets-image.png"
      />
      <div class="magnets__info">
        <div class="magnets__box">
          <div class="magnets__inner">
            <h1 class="magnets__title">{{ props.data.title }}</h1>
            <h4
              class="magnets__subtitle"
              v-html="props.data.slogan"
            />
          </div>
          <div class="magnets__description">
            <div
              v-html="props.data.text"
              class="magnets__text"
            />
            <strong class="magnets__strong">
              {{ props.data.feature }}
            </strong>
          </div>
        </div>
        <img
          alt=""
          class="magnets__smile"
          src="@assets/images/magnets-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.magnets {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image {
    width: 100%;
  }

  &__info {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;

    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    max-width: 331px;

    @include lt($lg) {
      gap: 14px;
      align-items: center;
      max-width: 100%;
      text-align: center;
    }
  }

  &__box {
    display: flex;
    gap: 40px;
    justify-content: center;
    @include lt($lg) {
      gap: 14px;
      align-items: center;
      text-align: center;
    }
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__subtitle {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    text-transform: uppercase;
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__subtitle span {
    color: var(--color-accent-200);
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    @include gte($lg) {
      max-width: 331px;
    }

    @include lt($lg) {
      gap: 14px;
    }
  }

  &__text {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    max-width: 210px;
    @include lt($lg) {
      width: 112px;
    }
  }
}
</style>
