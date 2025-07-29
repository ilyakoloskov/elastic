<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>
<template>
  <section class="kosters">
    <AppContainer
      class="kosters__container"
      size="lg"
    >
      <div class="kosters__info">
        <div class="kosters__inner">
          <TheLogotip size="lg" />
          <h1 class="kosters__title">{{ props.data.title }}</h1>
        </div>
        <h4
          class="kosters__subtitle"
          v-html="props.data.slogan"
        />

        <div class="kosters__description">
          <div
            v-html="props.data.text"
            class="kosters__text"
          />
          <h5 class="kosters__strong">
            {{ props.data.feature }}
          </h5>
        </div>
        <img
          class="kosters__smile"
          src="@assets/images/kosters-smile.png"
        />
      </div>

      <img
        class="kosters__image"
        src="@assets/images/kosters-image.png"
      />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.kosters {
  &__container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    @include lt($lg) {
      flex-direction: column;
    }
  }

  &__image {
    width: 100%;
    max-width: 804px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include gte($lg) {
      max-width: 331px;
    }
    @include lt($lg) {
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
      order: 2;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
  }

  &__title {
    margin-top: 24px;
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
  }

  &__subtitle {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include gte($lg) {
      margin: 40px 0;
    }
    @include lte($lg) {
      text-align: center;
    }
  }

  &__subtitle span {
    font-size: var(--font-size-sm);
  }

  &__strong {
    margin-top: 20px;
    font-weight: 700;
    color: var(--color-primary-200);
  }

  &__smile {
    align-self: center;
    width: 120px;
    @include gte($lg) {
      width: 203px;
      margin-top: 40px;
    }
  }
}
</style>
