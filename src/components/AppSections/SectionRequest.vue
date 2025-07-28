<script setup>
const { handleOpenModal } = inject('stateModalForm')

const props = defineProps({
  data: Object,
})

const showFormModal = () => {
  handleOpenModal(true)
}
</script>

<template>
  <section class="submit-request">
    <AppContainer
      class="submit-request__container"
      size="lg"
    >
      <img
        alt=""
        class="submit-request__img"
        :src="data.banner"
      />
      <div class="submit-request__wrapper">
        <img
          alt=""
          class="submit-request__personage"
          :src="data.personage"
        />
        <div class="submit-request__box">
          <p class="submit-request__description">
            {{ data.text }}
          </p>
          <AppButton
            @click="showFormModal"
            class="submit-request__btn"
            >Оставить заявку</AppButton
          >
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.submit-request {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__img {
    width: 100%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    max-width: 331px;
    margin-bottom: 45px;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }

  &__wrapper {
    display: flex;
    gap: var(--spacing-md);
    align-items: end;
    margin-top: -120px;

    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  &__personage {
    max-width: 531px;

    @media screen and (max-width: 768px) {
      align-self: start;
      max-width: 205px;
      margin-top: -20px;
    }
  }

  &__description {
    font-weight: 400;
    color: var(--color-primary-200);
  }

  &__btn {
    align-self: end;
  }
}
</style>
