<script setup>
import MediaProvider from '@/providers/media/MediaProvider'
import { useGlobalsStore } from '@/store/globalsStore'

const store = useGlobalsStore()
const { data, pending, error } = useApiFetch('general/')

watch(
  () => data.value,
  (newValue) => {
    if (newValue) {
      store.setGlobalsData(newValue)
    }
  },
  { immediate: true }
)

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
    <template v-if="pending">
      <AppLoader />
    </template>

    <template v-else>
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
    </template>
  </MediaProvider>
</template>

<style lang="scss">
.app-main {
  flex-grow: 1;
}
</style>
