<script setup>
import MediaProvider from '@/providers/media/MediaProvider'

const isOpenModal = ref(false)
const handleOpenModal = (flag) => {
  isOpenModal.value = flag
}
provide('stateModalForm', {
  isOpenModal,
  handleOpenModal,
})
</script>

<template>
  <MediaProvider>
    <AppHeader />
    <NuxtLayout class="app-main">
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />

    <AppModal
      v-model:model-value="isOpenModal"
      class="modal-form"
      @update:model-value="handleOpenModal"
    >
      <template #header>
        <h4 class="modal-form__title">Оставить заявку</h4>
      </template>
      <template #content>
        <FeedBackForm />
      </template>
    </AppModal>
  </MediaProvider>
</template>

<style lang="scss">
.app-main {
  flex-grow: 1;
}
</style>
