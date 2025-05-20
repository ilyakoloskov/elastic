<script setup lang="ts">
import ListButton from '@components/ListButton.vue'

const items1 = [
  {
    label: 'Джибитсы',
    link: 'jibits',
  },
  {
    label: 'Магниты',
    link: 'magnets',
  },
  {
    label: 'Брелоки',
    link: 'keyrings',
  },
  {
    label: 'Пуллеры',
    link: 'pullers',
  },
  {
    label: 'Патчи',
    link: 'patches',
  },
  {
    label: 'Костеры',
    link: 'kosters',
  },
]

const items2 = [
  {
    label: 'Стикеры',
    link: 'stickers',
  },
  {
    label: '3d-стикеры',
    link: 'stickers3d',
  },
  {
    label: 'Тг-стикеры',
    link: 'stickers-tg',
  },
  {
    label: 'Раскраски',
    link: 'coloring',
  },
  {
    label: 'Брендбук',
    link: 'brandbook',
  },
  {
    label: 'Маскот',
    link: 'mascot',
  },
]
</script>

<template>
  <nav class="the-navigation">
    <ul class="the-navigation__list">
      <!--      <li class="the-navigation__item">-->
      <!--        <NuxtLink-->
      <!--          class="the-navigation__link"-->
      <!--          to="/contacts"-->
      <!--          >Contacts</NuxtLink-->
      <!--        >-->
      <!--      </li>-->
      <li class="the-navigation__item>">
        <ListButton title="Изделия из ПВХ" :items="items1" />
      </li>
      <li class="the-navigation__item>">
        <ListButton title="Дизайн" :items="items2" />
      </li>
      <li class="the-navigation__item">
        <NuxtLink
          class="the-navigation__link"
          to="/about"
        >О нас</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.the-navigation {
  &__list {
    @include flex(center);
    gap: var(--spacing-lg);
    justify-content: space-between;
  }

  &__link {
    color: var(--color-primary-200);
    &:hover {
      text-decoration: underline;
    }
  }

  &__link_accent {
    color: var(--color-primary-400);
  }

  &__item {
  }
}
</style>