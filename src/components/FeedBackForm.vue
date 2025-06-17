<script setup>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

const model = reactive({
  name: '',
  surname: '',
  phone: '',
  email: '',
  company: '',
  agreement: false,
})

const rules = {
  name: { required },
  surname: { maxLength: maxLength(50) },
  phone: { required, minLength: minLength(10) },
  email: { required, email },
  company: { maxLength: maxLength(100) },
  agreement: { required },
}

const v$ = useVuelidate(rules, model)

const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$invalid) return
  // Логика отправки формы
  console.log('Форма отправлена', model)
}
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="form"
  >
    <div class="form__fields-wrapper">
      <AppInput
        name="name"
        placeholder="Имя*"
        class="form__input"
        v-model="model.name"
      />
      <AppInput
        name="surname"
        placeholder="Фамилия"
        class="form__input"
        v-model="model.surname"
      />
    </div>
    <div class="form__fields-wrapper">
      <AppInput
        v-model="model.phone"
        name="phone"
        placeholder="Телефон*"
        class="form__input"
      />
      <AppInput
        v-model="model.email"
        name="email"
        placeholder="Ваш email*"
        class="form__input"
      />
    </div>
    <AppInput
      v-model="model.company"
      name="company"
      placeholder="Название вашей компании"
    />

    <AppCheckBox v-model="model.agreement"
      >Я соглашаюсь с Политикой Конфиденциальности сайта</AppCheckBox
    >
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

<script setup lang="ts"></script>
