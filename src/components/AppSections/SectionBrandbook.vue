<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'
const props = defineProps({
  data: Object,
})

const { isDesktop } = useMedia()
</script>

<template>
  <section class="brandbook">
    <AppContainer
      class="brandbook__container"
      size="lg"
    >
      <img
        class="brandbook__image"
        src="@assets/images/brandbook.png"
      />
      <div class="brandbook__info">
        <div class="brandbook__inner">
          <TheLogotip
            v-if="isDesktop"
            class="brandbook__logo"
            size="lg"
          />
          <h2 class="brandbook__title">{{ props.data.title }}</h2>
        </div>
        <h4
          class="brandbook__subtitle"
          v-html="props.data.slogan"
        />
        <div class="brandbook__description">
          <div
            v-html="props.data.text"
            class="brandbook__text"
          />

          <h5 class="brandbook__strong">{{ props.data.feature }}</h5>
        </div>
        <img
          alt=""
          class="brandbook__smile"
          src="@assets/images/brandbook-smile.png"
        />
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.brandbook {
  &__container {
    display: grid;
    grid-template-columns: auto 1fr;

    @include lt($lg) {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: center;
    }
  }

  &__image {
    width: 100%;
    max-width: 780px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @include lt($lg) {
      align-items: center;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }

  &__logo {
    align-self: center;
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

  &__subtitle {
    margin: 40px 0;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;
    @include lt($md) {
      margin: 0;
      font-size: var(--font-size-sm);
    }
    @include lt($lg) {
      text-align: center;
    }
  }

  &__subtitle span {
    color: var(--color-accent-200);
  }

  &__description {
    display: flex;
    flex-direction: column;

    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__strong {
    align-self: flex-start;
    margin-top: 20px;
    font-weight: 700;
    color: var(--color-primary-200);
    @include lte($md) {
      font-size: var(--font-size-sm);
    }

    @include lt($lg) {
      align-self: center;
    }
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 40px;
  }
}
</style>
