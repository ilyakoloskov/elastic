<script setup>
const props = defineProps({
  data: Object,
})
</script>

<template>
  <section class="about">
    <AppContainer class="about__container">
      <article class="about-article">
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-1.png"
        />
        <div class="about-article__inner">
          <div class="about-article__info">
            <h2 class="about-article__title">
              {{ data.title }}
            </h2>
            <p class="about-article__description">
              {{ data.text1 }}
            </p>
            <img
              alt=""
              class="about-article__pattern"
              src="@assets/images/about-pattern.png"
            />
          </div>
          <img
            alt=""
            class="about-article__img"
            src="@assets/images/about-box-3.png"
          />
        </div>
      </article>

      <article class="about-article">
        <div class="about-article__inner">
          <div class="about-article__column">
            <p class="about-article__description">
              {{ data.text2 }}
            </p>
          </div>
          <div class="about-article__column about-article__info">
            <p class="about-article__description">
              {{ data.text3 }}
            </p>
            <strong class="about-article__strong">
              {{ data.text4 }}
            </strong>
          </div>
        </div>
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-2.png"
        />
      </article>
    </AppContainer>
  </section>
</template>

<style lang="scss">
// ABOUT

.about {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

// ABOUT-ARTICLE

.about-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  &__title {
    @include title();
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__strong {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);

    @media screen and (max-width: 1280px) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    justify-content: space-between;
  }
}
</style>
