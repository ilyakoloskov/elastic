<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>

<template>
  <div class="coloring">
    <AppContainer
      class="coloring__container"
      size="lg"
    >
      <img
        alt=""
        class="coloring__image"
        src="@assets/images/coloring-image.png"
      />
      <div class="coloring__info">
        <div class="coloring__inner">
          <h1 class="coloring__title">{{ props.data.title }}</h1>
          <h4
            class="coloring__subtitle"
            v-html="props.data.slogan"
          />
        </div>
        <div class="coloring__description">
          <div />
          <div
            class="coloring__text"
            v-html="props.data.text"
          />
          <strong class="coloring__strong">
            {{ props.data.feature }}
          </strong>
        </div>
        <img
          alt=""
          class="coloring__smile"
          src="@assets/images/coloring-smile.png"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style lang="scss">
.coloring {
  &__container {
    display: flex;
    flex-wrap: wrap;

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
    justify-content: space-between;
    width: 100%;
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
    @include lt($lg) {
      gap: 14px;
      align-items: center;
      width: 100%;
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
    @include lt($lg) {
      text-align: center;
    }
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__subtitle span {
    color: var(--color-accent-200);
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    @include gte($lg) {
      max-width: 570px;
    }
    @include lt($lg) {
      gap: 14px;
    }
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    align-self: center;
    width: 180px;
    @include lt($lg) {
      width: 125px;
    }
  }
}
</style>
