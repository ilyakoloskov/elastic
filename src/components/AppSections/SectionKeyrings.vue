<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>
<template>
  <section class="keyrings">
    <AppContainer
      class="keyrings__container"
      size="lg"
    >
      <img
        class="keyrings__image"
        src="@assets/images/keyrings-image.png"
      />
      <div class="keyrings__info">
        <img
          alt=""
          class="keyrings__smile"
          src="@assets/images/keyrings-smile.png"
        />
        <div class="keyrings__inner">
          <h1 class="keyrings__title">{{ props.data.title }}</h1>
          <h4
            class="keyrings__subtitle"
            v-html="props.data.slogan"
          />
        </div>
        <div class="keyrings__description">
          <div
            class="keyrings__text"
            v-html="props.data.text"
          />
          <strong class="keyrings__strong">
            {{ props.data.feature }}
          </strong>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.keyrings {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include lte($md) {
      gap: 20px;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
  }

  &__info {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    @include lt($lg) {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
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
      max-width: 450px;
    }
    @include lt($lg) {
      gap: 14px;
      order: 1;
    }
  }

  &__text {
    font-size: 14px;
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    width: 100%;
    max-width: 205px;

    @include lt($lg) {
      order: 2;
      max-width: 120px;
    }
  }
}
</style>
