<script setup>
const { data, pending, error } = useApiFetch('about/')
</script>

<template>
  <div class="about-page">
    <template v-if="pending">
      <AppLoader />
    </template>
    <template v-else>
      <SectionAbout :data="data.about" />

      <SectionForm />
    </template>
  </div>
</template>
