<script setup lang="ts">
const { handleOpenModal } = inject('stateModalForm')

const showFormModal = () => {
  handleOpenModal(true)
}

definePageMeta({
  layout: 'subcategory',
})
</script>

<template>
  <section class="subproduct-page">
    <img
      class="subproduct-page__img"
      src="@assets/images/subcategory-main-screen.png"
    />
    <AppBackLink class="subproduct-page__back-link" />
    <AppContainer class="subproduct-page__container">
      <!-- INFO -->
      <div class="subproduct-page__info">
        <h1 class="subproduct-page__title">Lorem ipsum</h1>
        <p class="subproduct-page__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div class="subproduct-page__edge edge">
        <div
          class="edge-item"
          v-for="item in 3"
        >
          <p class="edge-item__text">Lorem ipsum dolor</p>
          <h5 class="edge-item__title">Lorem ipsum dolor</h5>
        </div>

        <AppButton @click="showFormModal">Оставить заявку</AppButton>
      </div>

      <SectionGallery />

      <SectionForm />
    </AppContainer>
  </section>
</template>

<style lang="scss">
.subproduct-page {
  &__img {
    display: block;
    width: 100%;
    max-height: 696px;
    object-fit: cover;
  }

  &__back-link {
    margin-top: var(--spacing-3xl);
  }

  &__container {
    margin-top: var(--spacing-lg);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    max-width: 686px;
    margin-top: var(--spacing-lg);
  }

  &__title {
    @include title();
  }

  &__description {
    font-size: var(--font-size-md);
  }

  &__edge {
    margin-top: var(--spacing-lg);
    border-top: 1px solid var(--color-primary-100);
  }
}

.edge {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-md);
  padding-top: 16px;

  &-item {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-s);
  }

  &-item__description {
    font-size: var(--font-size-md);
  }

  &-item__title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
  }
}
</style>
