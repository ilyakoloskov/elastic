<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { vClickOutside } from '@/directives/vClickOutside'
import { useMedia } from '@/composables/useMedia'
import IconCaret from "@/assets/icons/caret-down.svg?component"

defineProps({
  items: Array<any>,
  title: String,
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
  },
)

</script>

<template>
  <div
    v-click-outside="handleClickOutside"
    class="list-button-wrapper"
        @mouseenter="handleShow(true)"
        @mouseleave="handleShow(false)"
      >
    <button
      :class="['list-button', {'list-button_active': isOpen }]"
      type="button"
      @click="handleClick"
    >
      {{ title }} <IconCaret :class="{ 'list-button__icon_open' : isOpen }" />
    </button>

    <div
      v-show="isOpen"
      :class="[
        'list-button__menu',
        { 'list-button__menu_active': isOpen },
        { 'list-button__menu_mobile': !isDesktop },
        { 'list-button__menu_desktop': isDesktop },
      ]"
    >

      <NuxtLink v-for="item in items"
                :class="['list-button__menu-link']"
                :to="`/product/${item.link}`"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">

.list-button-wrapper {
  //position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-m);
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: var(--header-height);
  transition: var(--transition-hover);

  &_active {
    text-decoration: underline;
  }

  &__icon_open {
    rotate: 180deg;
  }

  &__menu {
    position: absolute;
    z-index: 8;
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 100%;
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

  &__menu-link {
    width: 100%;
    height: 100%;
    padding: 12px 16px;
    color: var(--color-primary-200);
    font-weight: 700;
  }

  &__menu-link {
    transition: var(--transition-hover);

    &:hover {
      cursor: pointer;
      background-color: var(--color-primary-20);
      transition: var(--transition-hover);
    }

  }

  &__menu-link.router-link-active.router-link-exact-active {
    text-decoration: underline;
    color: var(--color-accent-100);
  }

  &__menu-link_active {
    text-decoration: underline;
  }

}
</style>
