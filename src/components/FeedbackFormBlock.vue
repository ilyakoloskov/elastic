<template>
  <section class="feedback-form-block">
    <TheContainer class="feedback-form-block__container">
      <div class="feedback-form-block__wrapper">
        <h2 class="feedback-form-block__title1">Сделайте первый шаг к</h2>
        <h2 class="feedback-form-block__title2">успешному проекту</h2>
        <FeedBackForm/>
<!--        <form @p.prevent class="form__fields">-->
<!--          <div class="form__fields-wrapper">-->
<!--            <AppInput name="name" placeholder="Имя*" class="form__input" />-->
<!--            <AppInput name="surname" placeholder="Фамилия" class="form__input" />-->
<!--          </div>-->
<!--          <div class="form__fields-wrapper">-->
<!--            <AppInput name="phone" placeholder="Телефон*" class="form__input" />-->
<!--            <AppInput name="email" placeholder="Ваш email*" class="form__input" />-->
<!--          </div>-->
<!--          <AppInput name="company" placeholder="Название вашей компании" />-->
<!--          <AppButton>Отправить заявку</AppButton>-->
<!--        </form>-->
        <img src="@assets/images/request-2.png" alt="form-image" class="feedback-form-block__image" />
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.feedback-form-block {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__wrapper {
    margin: 0 auto;
    max-width: 686px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title1 {
    @include title(var(--color-primary-200), var(--font-size-lx));
  }

  &__title2 {
    @include title(var(--color-accent-100), var(--font-size-lx));
  }

  &__image {
    width: 360px;
    margin-top: var(--spacing-lg);
  }
}
</style>

<script setup lang="ts">
</script>