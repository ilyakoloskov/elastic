<script setup lang="ts">
import ArrowExpand from '@/assets/icons/arrow-expand.svg?component'
const props = defineProps({
  navigation: {
    type: Object,
  },

  direction: {
    type: String,
  },
})
</script>

<template>
  <section class="categories">
    <AppContainer class="categories__container">
      <div class="categories__wrapper">
        <div class="categories__img">
          <slot name="img">
            <img
              alt=""
              class="categories__img"
              src="@assets/images/categories-2.png"
            />
          </slot>
        </div>

        <div class="categories__wrap">
          <slot name="personage">
            <img
              alt=""
              class="categories__personage"
              src="@assets/images/categories-personage-2.png"
            />
          </slot>

          <div
            class="categories__info"
            :class="{
              categories__info_start: props.direction === 'left',
            }"
          >
            <div class="categories__inner">
              <div class="categories__box">
                <h2 class="categories__title">
                  <slot name="title" />
                </h2>
                <strong class="categories__subtitle">
                  <slot name="subtitle" />
                </strong>
              </div>

              <p class="categories__description">
                <slot name="description" />
              </p>
            </div>
          </div>
        </div>
        <nav
          class="categories__navigation"
          :class="{
            categories__navigation_start: props.direction === 'left',
          }"
        >
          <ul class="categories__list">
            <li
              class="categories__item"
              v-for="item in props.navigation?.items"
              :key="item.link"
            >
              <NuxtLink
                class="categories__link"
                :to="`${props.navigation?.category}/${item.link}`"
                >{{ item.label }}
                <ArrowExpand class="categories__link-icon" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.categories {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__wrapper {
    position: relative;
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    margin-top: -330px;
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx));
  }

  &__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-primary-200);
    text-transform: uppercase;
  }

  &__img {
    width: 100%;
    margin-bottom: var(--spacing-xl);
    object-fit: cover;
  }

  &__personage {
    max-width: 568px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    min-width: 331px;
  }

  &__inner {
    display: flex;

    gap: var(--spacing-md);
    align-items: stretch;
    max-width: 804px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__info {
    align-self: end;
  }

  &__info_start {
    order: -1;
  }

  &__navigation {
    display: flex;
    gap: 10px;
    justify-self: end;
    max-width: 923px;
  }

  &__navigation_start {
    justify-self: start;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 24px;
  }

  &__link {
    display: flex;
    gap: 55px;
    align-items: center;
    justify-content: space-between;
    min-width: 184px;
    padding: 12px 0;
    font-size: 18px;
    color: var(--color-primary-200);
    border-bottom: 1px solid var(--color-primary-200);
  }

  &__link-icon {
    color: var(--color-primary-200);
    transition: var(--transition);
  }

  &__link:hover {
    color: var(--color-accent-200);
    border-bottom: 1px solid var(--color-accent-200);
    transition: var(--transition);

    & .categories__link-icon {
      color: var(--color-accent-200);
      transform: translateY(5px);
      transform: translateX(5px);
    }
  }
}
</style>
