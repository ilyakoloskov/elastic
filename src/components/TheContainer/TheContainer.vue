<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'fluid'
    tag?: 'div' | 'section'
  }>(),
  {
    size: 'xl',
    tag: 'div',
  }
)
</script>

<template>
  <Component
    :is="tag"
    :class="[`the-container_${props.size}`, 'the-container']"
  >
    <slot />
  </Component>
</template>

<style lang="scss">
.the-container {
  padding-right: var(--container-indent-md);
  padding-left: var(--container-indent-md);
  margin: 0 auto;
  width: 100%;

  &_xxs {
    max-width: var(--container-width-xxs);
  }

  &_xs {
    max-width: var(--container-width-xs);
  }

  &_sm {
    max-width: var(--container-width-sm);
  }

  &_md {
    max-width: var(--container-width-md);
  }

  &_lg {
    max-width: var(--container-width-lg);
  }

  &_xl {
    max-width: var(--container-width-xl);
  }

  &_xxl {
    max-width: var(--container-width-xxl);
  }

  &_xxxl {
    max-width: var(--container-width-xxxl);
  }

  &_fluid {
    max-width: 98%;
  }
}
</style>
