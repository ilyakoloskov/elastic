<script setup lang="ts">
import { computed } from 'vue'
import { v4 } from 'uuid'
import type { AppFormFieldProps } from './AppFormFieldTypes'
const props = defineProps<AppFormFieldProps>()

const id = computed(() => props.for ?? v4())
</script>

<template>
  <div class="app-form-field">
<!--    <label-->
<!--      v-if="props.label"-->
<!--      :for="props.for"-->
<!--      class="app-form-field__label"-->
<!--    >-->
<!--      {{ props.label }}-->
<!--      <template v-if="props.required">*</template>-->
<!--    </label>-->
    <div class="app-form-field__item">
      <slot :id="id" />
    </div>
  </div>
</template>

<style src="./style.scss"></style>
