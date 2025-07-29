<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const props = defineProps({
  data: Object,
})

const { isDesktop } = useMedia()
</script>

<template>
  <AppContainer
    class="stickers-tg stickers-tg__container"
    size="lg"
  >
    <div
      v-if="!isDesktop"
      class="stickers-tg__inner"
    >
      <h1 class="stickers-tg__title">{{ props.data.title }}</h1>
      <h4
        v-html="props.data.slogan"
        class="stickers-tg__subtitle"
      />
    </div>

    <img
      alt=""
      class="stickers-tg__image"
      src="@assets/images/stickers-tg-image.png"
    />
    <div class="stickers-tg__info">
      <div
        v-if="isDesktop"
        class="stickers-tg__inner"
      >
        <h1 class="stickers-tg__title">{{ props.data.title }}</h1>
        <h4
          v-html="props.data.slogan"
          class="stickers-tg__subtitle"
        />
      </div>
      <div class="stickers-tg__description">
        <div
          class="stickers-tg__text"
          v-html="props.data.text"
        />
        <strong class="stickers-tg__strong">
          {{ props.data.feature }}
        </strong>
      </div>
      <img
        alt=""
        class="stickers-tg__smile"
        src="@assets/images/stickers-tg-smile.png"
      />
    </div>
  </AppContainer>
</template>

<style lang="scss">
.stickers-tg {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__image {
    position: relative;
    width: 100%;
    max-width: 1160px;
    aspect-ratio: 1.35;
  }

  &__info {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    @include lte($md) {
      gap: 5px;
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
      margin-bottom: 20px;
    }
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));
    text-transform: uppercase;
    @include lt($md) {
      font-size: 30px;
    }
  }

  &__subtitle {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
    font-weight: bold;
    text-transform: uppercase;
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
    @include lt($lg) {
      text-align: center;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    width: 100%;
    @include gte($lg) {
      max-width: 570px;
    }
  }

  &__subtitle span {
    color: var(--color-accent-200);
  }

  &__text {
    font-size: var(--font-size-sm);
  }

  &__strong {
    color: var(--color-primary-200);
  }

  &__smile {
    width: 100%;
    max-width: 180px;
    @include lte($sm) {
      flex-shrink: 2;
    }
  }
}
</style>
