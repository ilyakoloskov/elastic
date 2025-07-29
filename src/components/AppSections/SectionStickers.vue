<script setup lang="ts">
const props = defineProps({
  data: Object,
})
</script>

<template>
  <section class="stickers">
    <AppContainer
      class="stickers__container"
      size="lg"
    >
      <img
        alt=""
        class="stickers__image"
        src="@assets/images/stickers-image.png"
      />
      <div class="stickers__info">
        <div class="stickers__inner">
          <h1 class="stickers__title">{{ props.data.title }}</h1>
          <h4
            class="stickers__subtitle"
            v-html="props.data.slogan"
          />
        </div>
        <div class="stickers__description">
          <div v-html="props.data.text" />
          <strong class="stickers__strong">{{ props.data.feature }}</strong>
        </div>
        <img
          alt=""
          class="stickers__smile-img"
          src="@assets/images/stickers2-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.stickers {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    color: var(--color-accent-100);
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

  &__text {
    @include lte($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile-img {
    width: 200px;
    @include lt($lg) {
      align-self: center;
      width: 120px;
    }
  }
}
</style>
