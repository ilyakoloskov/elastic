<script setup lang="ts">
// TODO: Не ясно какой эндпоинт
const { data, pending, error } = useApiFetch('design/stickers-tg/')

const stickersTg = computed(() => data.value || {})
definePageMeta({
  layout: 'product',
})
</script>

<template>
  <div class="product-body">
    <template v-if="pending">
      <AppLoader />
    </template>
    <template v-else>
      <SectionStickersTelegram
        :data="stickersTg.design"
        :pending="pending"
      />

      <SectionGallery :items="stickersTg.gallery" />
    </template>
  </div>
</template>
