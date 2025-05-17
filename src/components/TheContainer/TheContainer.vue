<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'fluid'
    tag?: 'div' | 'section'
  }>(),
  {
    size: 'xxl',
    tag: 'div',
  }
)
</script>

<template>
  <Component
    :is="tag"
    :class="[`the-container_size-${props.size}`, 'the-container']"
  >
    <slot />
  </Component>
</template>

<style lang="scss">
.the-container {
  padding-right: var(--container-indent);
  padding-left: var(--container-indent);
  margin: 0 auto;
  width: 100%;

  &_size-xxs {
    max-width: var(--container-width-xxs);
  }

  &_size-xs {
    max-width: var(--container-width-xs);
  }

  &_size-sm {
    max-width: var(--container-width-sm);
  }

  &_size-md {
    max-width: var(--container-width-md);
  }

  &_size-lg {
    max-width: var(--container-width-lg);
  }

  &_size-xl {
    max-width: var(--container-width-xl);
  }

  &_size-xxl {
    max-width: var(--container-width-xxl);
  }

  &_size-xxxl {
    max-width: var(--container-width-xxxl);
  }

  &_size-fluid {
    max-width: 100%;
  }
}
</style>
