<script setup lang="ts">
import { useMedia } from '~/composables/useMedia'

const { isDesktop } = useMedia()

</script>

<template>
  <TheContainer size="lg" class="mascot mascot__container">
    <div class="mascot__top-block" v-if="!isDesktop">
      <div class="mascot__title-wrapper">
        <div class="mascot__title">
          <div>
            Разработка персонажа бренда -
            <span class="mascot__text-accent">маскота</span>
          </div>
        </div>
      </div>
      <p class="mascot__title-description">
        Маскот— это узнаваемый персонаж, инструмент маркетингового дизайна. Он станет символом и талисманом компании,
        ведь
        у маскота есть история, личность и харизма. <br>В нем отражается уникальное позиционирование бренда.
      </p>
    </div>
    <div class="mascot__image-wrapper">
      <img src="@assets/images/mascot.png" class="mascot__mascot-img" alt="">
      <img src="@assets/images/pen.png" class="mascot__pen-img" alt="">
    </div>

    <div style="display: flex; flex-direction: column;">
    <div class="mascot__top-block" v-if="isDesktop">
      <div class="mascot__title-wrapper">
        <div class="mascot__title">
          <TheLogotipBig />
          <div>
            Разработка персонажа бренда -
            <span class="mascot__text-accent">маскота</span>
          </div>
        </div>
      </div>
      <p>
        Маскот— это узнаваемый персонаж, инструмент маркетингового дизайна. Он станет символом и талисманом компании,
        ведь
        у маскота есть история, личность и харизма. В нем отражается уникальное позиционирование бренда.
      </p>
    </div>
    <div class="mascot__bottom-block">
      <h4 class="mascot__list-header">ПРЕИМУЩЕСТВА КОМПАНИЙ <br>У КОТОРЫХ ЕСТЬ МАСКОТ:</h4>

      <div>
        <ul>
          <li class="mascot__list-item">УЗНАВАЕМОСТЬ</li>
        </ul>
        <p class="mascot__list-description">
          Маскот выделяет бренд среди конкурентов и делает его запоминающимся.
        </p>
      </div>

      <div>
        <ul>
          <li class="mascot__list-item">УВЕЛИЧЕНИЕ ДОХОДА</li>
        </ul>
        <p class="mascot__list-description">
          Исследования показывают, что реклама с маскотом приносит на на 30% больше прибыли. Также персонажи выступают
          самостоятельным объектом продаж в качестве мерча.
        </p>
      </div>

      <div>
        <ul>
          <li class="mascot__list-item">ЭМОЦИОНАЛЬНАЯ СВЯЗЬ</li>
        </ul>
        <p class="mascot__list-description">Через яркий и дружелюбный образ маскот помогает установить доверие и
          симпатию у аудитории.</p>
      </div>

    </div>
    </div>
  </TheContainer>
</template>

<style lang="scss">
.mascot {

  color: var(--color-primary-200);

  &__container {
    display: flex;
    align-items: center;
    gap: 24px;
    @include lt($lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__top-block {
    @include gte($lg) {
      max-width: 450px;
      margin-bottom: 24px;
    }
  }

  &__image-wrapper {
    position: relative;
    margin-top: 20px;
    @include gte($lg) {
      margin-left: 30px;
    }
  }

  &__mascot-img {
    max-width: 689px;
    width: 100%;
  }

  &__pen-img {
    position: absolute;
    //max-width: 292px;
    width: 45%;
    rotate: 42deg;
    left: 15%;
    top: -24%;
    @include lt($lg) {
      left: 23%;
      top: -24%;
    }
  }

  &__title-wrapper {
    display: flex;
    margin-bottom: 24px;
    @include gte($lg) {
      max-width: 450px;
    }
  }

  &__title {
    font-size: var(--font-size-lx);
    font-family: var(--font-family-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include gte($lg) {
      max-width: 300px;
    }
    @include lt($lg) {
      text-align: center;
    }
    @include lt($md) {
      font-size: 30px;
    }
    gap: 24px
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__title-description {
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }

  &__bottom-block {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include gte($lg) {
      max-width: 450px;
    }
  }

  &__list-header {
    font-weight: 700;
    font-size: var(--font-size-lg);
    @include lt($md) {
      font-size: var(--font-size-m);
    }
  }

  &__list-item {
    font-weight: 700;
    margin-bottom: 6px;
    list-style: disc inside;
    margin-left: 16px;
  }

  &__list-description {
    color: var(--color-primary-100);
    @include lt($md) {
      font-size: var(--font-size-sm);
    }
  }
}
</style>