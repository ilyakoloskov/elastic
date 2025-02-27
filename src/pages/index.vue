<template>
  <div class="main-screen">
    <TheContainer
      class="main-screen__container"
      size="xl"
    >
      <h1 class="main-screen__title">Welcome</h1>
      <p class="main-screen__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi autem porro nemo numquam
        voluptas impedit, magnam similique maxime quam facere. Nihil doloribus sint necessitatibus
        reiciendis dolorem totam temporibus earum?
      </p>
    </TheContainer>
  </div>
</template>

<style lang="scss">
.main-screen {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__description {
    max-width: 620px;
  }
}
</style>
