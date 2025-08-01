<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'
const props = defineProps({
  data: Object,
})

const { isDesktop } = useMedia()
</script>

<template>
  <section class="jibits">
    <AppContainer
      class="jibits__container"
      size="lg"
    >
      <div class="jibits__info">
        <div
          v-if="isDesktop"
          class="jibits__inner"
        >
          <TheLogotip size="lg" />
          <h1 class="jibits__title">{{ props.data.title }}</h1>
        </div>
        <h4
          class="jibits__subtitle"
          v-html="props.data.slogan"
        />
        <div
          v-html="props.data.text"
          class="jibits__description"
        />
        <img
          alt=""
          class="jibits__smile"
          src="@assets/images/jibits-smile.png"
        />
      </div>
      <img
        alt=""
        class="jibits__image"
        src="@assets/images/jibits.png"
      />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.jibits {
  &__container {
    display: flex;
    gap: 24px;
    align-items: center;
    @include lt($lg) {
      flex-direction: column;
    }
    @include lte($md) {
      gap: 20px;
    }
  }

  &__image {
    width: 100%;
    max-width: 805px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include lt($lg) {
      gap: 10px;
      order: 2;
    }
    @include gte($lg) {
      max-width: 331px;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin-top: 24px;
    text-transform: uppercase;
    @include title(var(--color-primary-200), var(--font-size-lx), var(--font-family-secondary));

    @include lt($lg) {
      margin: 0;
      text-align: center;
    }
    @include lte($md) {
      font-size: 30px;
    }
  }

  &__subtitle {
    margin: 40px 0;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
    text-transform: uppercase;

    @include lt($lg) {
      margin: 20px 0 0;
      text-align: center;
    }
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__subtitle span {
    color: var(--color-accent-200);
  }

  &__description {
    @include lte($md) {
      font-size: 14px;
    }
  }

  &__smile {
    align-self: center;
    width: 203px;
    margin-top: 24px;
    @include lt($lg) {
      width: 125px;
    }
  }
}
</style>
