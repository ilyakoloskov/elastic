<template>
  <div class="contacts-screen">
    <TheContainer class="contacts-screen__container">
      <h1 class="contacts-screen__title">Contacts</h1>
      <p class="contacts-screen__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quasi autem porro nemo numquam
        voluptas impedit, magnam similique maxime quam facere. Nihil doloribus sint necessitatibus
        reiciendis dolorem totam temporibus earum?
      </p>
    </TheContainer>
  </div>
</template>

<style lang="scss">
.contacts-screen {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__description {
    max-width: 620px;
  }
}
</style>
