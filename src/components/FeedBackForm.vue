<template>
  <form @p.prevent class="form">
    <div class="form__fields-wrapper">
      <AppInput name="name" placeholder="Имя*" class="form__input" />
      <AppInput name="surname" placeholder="Фамилия" class="form__input" />
    </div>
    <div class="form__fields-wrapper">
      <AppInput name="phone" placeholder="Телефон*" class="form__input" />
      <AppInput name="email" placeholder="Ваш email*" class="form__input" />
    </div>
    <AppInput name="company" placeholder="Название вашей компании" />

    <AppCheckBox>Я соглашаюсь с Политикой Конфиденциальности сайта</AppCheckBox>
    <AppButton>Отправить заявку</AppButton>
  </form>
</template>

<style lang="scss">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: var(--spacing-lg);

  &__fields-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__input {
    max-width: 300px;
    width: 100%;
  }
}
</style>

<script setup lang="ts">
</script>