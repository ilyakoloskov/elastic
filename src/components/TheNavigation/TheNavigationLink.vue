<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { vClickOutside } from '@/directives/vClickOutside'
import { useMedia } from '@/composables/useMedia'
import IconCaret from '@/assets/icons/caret-down.svg?component'

const props = defineProps({
  label: String,
  category: String,
  items: Array<any>,
})

const { isDesktop } = useMedia()

const isOpen = ref<boolean>(false)
const handleShow = (flag: boolean) => {
  if (isDesktop.value) isOpen.value = flag
}
const handleClick = () => {
  isOpen.value = !isOpen.value
}
const handleClickOutside = () => {
  isOpen.value = false
}

const route = useRoute()
watch(
  () => [route, route.name],
  () => {
    if (isOpen.value) {
      isOpen.value = false
    }
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>

<template>
  <NuxtLink
    v-click-outside="handleClickOutside"
    :to="`/${props.category}`"
    class="the-navigation-link"
    @mouseenter="handleShow(true)"
    @mouseleave="handleShow(false)"
  >
    <span
      :class="['the-navigation-link__label', { 'the-navigation-link_active': isOpen }]"
      type="button"
      @click="handleClick"
    >
      {{ props.label }}

      <IconCaret
        :class="{ 'the-navigation-link__icon_open': isOpen }"
        class="the-navigation-link__icon"
      />
    </span>

    <div
      v-show="isOpen"
      :class="[
        'the-navigation-link__menu',
        { 'the-navigation-link__menu_active': isOpen },
        { 'the-navigation-link__menu_mobile': !isDesktop },
        { 'the-navigation-link__menu_desktop': isDesktop },
      ]"
    >
      <div class="the-navigation-link__menu-name">{{ props.label }}</div>
      <div class="the-navigation-link__menu-items">
        <NuxtLink
          v-for="item in items"
          :key="item.link"
          :class="['the-navigation-link__menu-link']"
          :to="`/${props.category}/${item.link}`"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.the-navigation-link {
  &_active {
    text-decoration: underline;
  }

  &__icon {
    transition: var(--transition);
    transform: rotate(0);
  }

  &__label {
    display: flex;
    gap: var(--spacing-m);
    align-items: center;
    justify-content: center;
    height: var(--header-height);
    color: var(--color-primary-200);
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  &:hover .the-navigation-link__label,
  .the-navigation-link__icon {
    color: var(--color-accent-200);
  }

  &__icon_open {
    transition: var(--transition);
    transform: rotate(-180deg);
  }

  &__menu {
    position: absolute;
    z-index: 8;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    padding: 32px 64px;
    background-color: var(--color-primary-10);
    border: 1px solid var(--color-gray-600);
    border-radius: 0 0 6px 6px;
    box-shadow: 0 10px 8px 3px rgba(0, 0, 0, 0.1);

    &_active {
      animation-name: fade-in;
      animation-duration: 0.2s;
    }

    &_mobile {
      right: 0;
      bottom: 100%;
    }

    &_desktop {
      top: 100%;
      right: 0;
    }
  }

  &__menu:hover {
    color: var(--color-accent-200);
  }

  &__menu-name {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-primary-200);
  }

  &__menu-items {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
  }

  &__menu-link {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    font-weight: 700;
    color: var(--color-primary-200);
    text-decoration: none;
    cursor: pointer;
  }

  &__menu-link:hover {
    color: var(--color-accent-200);
  }

  &__menu-link.router-link-active.router-link-exact-active {
    color: var(--color-accent-100);
    border-bottom: 1px solid var(--color-accent-200);
  }

  &__menu-link_active {
    border-bottom: 1px solid var(--color-accent-200);
  }
}
</style>
