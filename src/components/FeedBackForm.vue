<script setup>
import { useVuelidate } from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'
import { reactive } from 'vue'
const { handleOpenModal } = inject('stateModalForm')

const closeFormModal = () => {
  handleOpenModal(false)
}

let isSend = ref(false)
let isSendLoading = ref(false)

const model = reactive({
  name: '',
  surname: '',
  phone: '',
  email: '',
  company: '',
  agreement: false,
})

const isAgreement = (value) => value === true

const rules = {
  name: { required },
  surname: { maxLength: maxLength(50) },
  phone: { required, minLength: minLength(10) },
  email: { required, email },
  company: { maxLength: maxLength(100) },
  agreement: { required, isAgreement },
}

const v$ = useVuelidate(rules, model)

const errorMessages = {
  required: 'Это поле обязательно для заполнения.',
  agreement: 'Пожалуйста, подтвердите согласие.',
  maxLength: (max) => `Максимальная длина ${max} символов.`,
  minLength: (min) => `Минимальная длина ${min} символов.`,
  email: 'Введите корректный адрес электронной почты.',
}

const submitForm = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) return
  try {
    isSendLoading.value = true
    const response = await useApiFetch('callback/', 'POST', {
      body: JSON.stringify(model),
    })
    if (response.data.value.success) {
      isSend.value = true
      isSendLoading.value = false
    }
  } catch (error) {
    console.log(error)
  } finally {
    isSendLoading.value = false
  }
}
</script>

<template>
  <form class="form">
    <template v-if="isSendLoading"><AppLoader class="form__loader" /></template>
    <template v-else-if="isSend">
      <div class="form__is-send-title">Ваша заявка успешно оправлена</div>
      <AppButton @click="closeFormModal">Закрыть</AppButton>
    </template>
    <template v-else>
      <div class="form__fields-wrapper">
        <AppInput
          v-model="model.name"
          :error="v$.name.$error ? errorMessages.required : ''"
          class="form__input"
          name="name"
          placeholder="Имя*"
        />
        <AppInput
          v-model="model.surname"
          :error="
            v$.surname.$error && v$.surname.maxLength.$error ? errorMessages.maxLength(50) : ''
          "
          class="form__input"
          name="surname"
          placeholder="Фамилия"
        />
      </div>
      <div class="form__fields-wrapper">
        <AppInput
          v-model="model.phone"
          :error="
            v$.phone.$error
              ? v$.phone.required.$error
                ? errorMessages.required
                : errorMessages.minLength(10)
              : ''
          "
          class="form__input"
          name="phone"
          placeholder="Телефон*"
        />
        <AppInput
          v-model="model.email"
          :error="
            v$.email.$error
              ? v$.email.required.$error
                ? errorMessages.required
                : errorMessages.email
              : ''
          "
          class="form__input"
          name="email"
          placeholder="Ваш email*"
        />
      </div>
      <AppInput
        v-model="model.company"
        :error="
          v$.company.$error && v$.company.maxLength.$error ? errorMessages.maxLength(100) : ''
        "
        name="company"
        placeholder="Название вашей компании"
      />

      <AppFormField :error="v$.agreement.$error ? errorMessages.agreement : ''">
        <AppCheckBox v-model="model.agreement">
          Я соглашаюсь с Политикой Конфиденциальности сайта
        </AppCheckBox>
      </AppFormField>

      <AppButton
        @click="submitForm"
        type="submit"
        >Отправить заявку</AppButton
      >
    </template>
  </form>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  padding-top: var(--spacing-lg);

  &__fields-wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }

  &__input {
    width: 100%;
    max-width: 300px;
  }

  &__loader {
    height: 100%;
    min-height: 300px;
  }

  &__is-send-title {
    font-size: var(--font-size-lx);
    font-weight: 700;
    color: var(--color-accent-100);
    text-align: center;
  }
}
</style>
