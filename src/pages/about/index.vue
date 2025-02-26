<template>
  <div class="about-screen">
    <TheContainer class="about-screen__container">
      <h1 class="about-screen__title">About</h1>
      <p class="about-screen__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi autem porro nemo numquam
        voluptas impedit, magnam similique maxime quam facere. Nihil doloribus sint necessitatibus
        reiciendis dolorem totam temporibus earum?
      </p>
    </TheContainer>
  </div>
</template>

<style lang="scss">
.about-screen {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__description {
    max-width: 620px;
  }
}
</style>
