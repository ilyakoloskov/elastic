<script setup lang="ts">
const { handleOpenModal } = inject('stateModalForm')

const route = useRoute()
const { data, pending, error } = useApiFetch(`design/mascot/${route.params.slug}/`)

const showFormModal = () => {
  handleOpenModal(true)
}

definePageMeta({
  layout: 'subcategory',
})
</script>

<template>
  <section class="subproduct-page">
    <template v-if="pending">
      <AppLoader />
    </template>
    <template v-else>
      <div class="subproduct-page__wrapper">
        <img
          class="subproduct-page__img"
          :src="data.banner"
        />
        <AppBackLink class="subproduct-page__back-link" />
        <AppContainer class="subproduct-page__container">
          <!-- INFO -->
          <div class="subproduct-page__info">
            <h1 class="subproduct-page__title">{{ data.mascot.title }}</h1>
            <p class="subproduct-page__description">
              {{ data.mascot.text }}
            </p>
          </div>

          <div class="subproduct-page__edge edge">
            <div
              class="edge-item"
              v-for="item in data.mascot.features"
            >
              <p class="edge-item__text">{{ item.title }}</p>
              <h5 class="edge-item__title">{{ item.text }}</h5>
            </div>

            <AppButton @click="showFormModal">Оставить заявку</AppButton>
          </div>

          <SectionSubProductImages :items="data.gallery" />

          <SectionForm />
        </AppContainer>
      </div>
    </template>
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
