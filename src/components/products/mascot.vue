<script setup lang="ts">
</script>

<template>
  <TheContainer size="lg" class="mascot mascot__container">
    <img src="@assets/images/mascot.png" class="mascot__mascot-img" alt="">
    <img src="@assets/images/pen.png" class="mascot__pen-img" alt="">

    <div>
      <div class="mascot__title-wrapper">
        <div class="mascot__title">
          <TheLogotipBig />
          <div>
            Разработка <br> персонажа <br> бренда -<br>
            <span class="mascot__text-accent">маскота</span>
          </div>
        </div>
      </div>
      <div class="mascot__list">
        <p>
          Маскот— это узнаваемый персонаж, инструмент маркетингового дизайна. Он станет символом и талисманом компании,
          ведь
          у маскота есть история, личность и харизма. В нем отражается уникальное позиционирование бренда.
        </p>

        <h4 class="mascot__list-header">ПРЕИМУЩЕСТВА КОМПАНИЙ У КОТОРЫХ ЕСТЬ МАСКОТ:</h4>

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
    position: relative;
    display: flex;
    gap: 23px;
  }

  &__mascot-img {
    max-width: 689px;
  }

  &__pen-img {
    position: absolute;
    max-width: 292px;
    rotate: 42deg;
    transform: translateY(-200px);
  }

  &__title-wrapper {
    display: flex;
    margin-bottom: 24px;
  }

  &__title {
    font-size: var(--font-size-lx);
    font-family: var(--font-family-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__text-accent {
    color: var(--color-accent-100);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__list-header {
    font-weight: 700;
    font-size: var(--font-size-lg);
  }

  &__list-item {
    font-weight: 700;
    margin-bottom: 6px;
  }

  &__list-description {
    color: var(--color-primary-100);
  }
}
</style>