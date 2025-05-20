<script lang="ts" setup>
// TODO: возможно width не нужно провайдить, производительность?
import { computed, onMounted, provide, ref } from 'vue'
import { injectionKey } from './injectionKey'
import { useEventListener } from '@/composables/useEventListener'
import { bp, gt, gte, lte } from '@/helpers/breakpoints'

defineSlots<{
  /** Содержимое по умолчанию */
  default: () => unknown
}>()

const width = ref<number>(0)

const isMobile = computed<boolean>(() => lte(width.value, bp.sm))
const isTablet = computed<boolean>(() => gt(width.value, bp.sm) && lte(width.value, bp.md))
const isDesktop = computed<boolean>(() => gte(width.value, bp.md))

const handleResize = () => {
  width.value = window.innerWidth
}

useEventListener(window, 'resize', handleResize)
onMounted(handleResize)

provide(injectionKey, { width, isMobile, isTablet, isDesktop })
</script>

<template>
  <slot />
</template>
