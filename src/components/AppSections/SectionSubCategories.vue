<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const mapItems = computed(() => {
  if (!props.items.length) return

  return props.items.map((item) => ({
    id: item.id,
    img: {
      preview: item.img,
      origin: item.url,
    },
    name: item.name,
  }))
})
</script>

<template>
  <section class="subcategory">
    <SectionGallery
      :isGallery="false"
      :items="mapItems"
    />
  </section>
</template>
