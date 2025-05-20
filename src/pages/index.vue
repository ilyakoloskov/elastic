<script setup lang="ts">
</script>

<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <TheContainer class="main-screen__container">
      <img
        alt=""
        class="main-screen__img"
        src="@assets/images/main-screen.png"
      />

      <div class="main-screen__info">
        <div class="main-screen__inner">
          <h1 class="main-screen__title">бренд-студия elastic</h1>
          <p class="main-screen__description">
            Ваш надежный партнер в создании уникальных дизайнов и креативных решений. Мы помогаем
            брендам выделяться и вдохновлять своих клиентов.
          </p>
        </div>
        <div class="main-screen__advantages">
          <!-- ITEM -->
          <div class="advantages-item">
            <strong class="advantages-item__title">200</strong>
            <p class="advantages-item__description">Успешно выполненных проектов</p>
          </div>
          <!-- ITEM -->
          <div class="advantages-item">
            <strong class="advantages-item__title">10+</strong>
            <p class="advantages-item__description">Лет опыта в дизайне и разработке</p>
          </div>
        </div>
      </div>
    </TheContainer>
  </section>

  <!-- ABOUT -->
  <section class="about">
    <TheContainer class="about__container">
      <article class="about-article">
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-1.png"
        />
        <div class="about-article__inner">
          <div class="about-article__info">
            <h2 class="about-article__title">О нас</h2>
            <p class="about-article__description">
              Быстро найдём самые действенные решения для вашего бренда и удержим фокус на
              результате.
            </p>
            <p class="about-article__description">
              Наши изделия не пылятся в ящике, а органично встраиваются в жизнь клиентов и создают
              естественный повод для разговора о вашем бренде
            </p>
            <img
              alt=""
              class="about-article__pattern"
              src="../assets/images/about-pattern.png"
            />
          </div>
          <img
            alt=""
            class="about-article__img"
            src="@assets/images/about-box-3.png"
          />
        </div>
      </article>

      <article class="about-article">
        <div class="about-article__inner">
          <div class="about-article__column">
            <p class="about-article__description">
              «ELASTIC» - бренд-студия, специализирующаяся на разработке айдентики. Каждый проект
              начинается с изучения вашего бизнеса, ценностей и аудитории. Наша задача — создать не
              просто набор графических элементов, а продуманную систему визуальной коммуникации.
              Логотип, цвета, шрифты, маскот — всё это будет работать вместе, чтобы ваш бренд
              запомнили, полюбили и выбрали.
            </p>
          </div>
          <div class="about-article__column about-article__info">
            <p class="about-article__description">
              Наш подход сочетает актуальные тренды с индивидуальными решениями. Завершенные проекты
              получают полный пакет файлов во всех необходимых форматах и руководство по
              использованию фирменного стиля.
            </p>
            <strong class="about-article__strong">
              Мы точно знаем какой именно мерч понравится вашим коллегам и друзьям, и что сейчас
              в тренде!
            </strong>
          </div>
        </div>
        <img
          alt=""
          class="about-article__img"
          src="@assets/images/about-box-2.png"
        />
      </article>
    </TheContainer>
  </section>

  <!-- CATEGORIES -->
  <section class="categories">
    <TheContainer class="categories__container">
      <div class="categories__wrapper">
        <img
          alt=""
          class="categories__img"
          src="@assets/images/categories-1.png"
        />
        <img
          alt=""
          class="categories__personage"
          src="@assets/images/categories-personage.png"
        />
        <div class="categories__info">
          <div class="categories__inner">
            <div class="categories__box">
              <h2 class="categories__title">Lorem ipsum</h2>
              <strong class="categories__subtitle">
                Ut enim ad minim veniam, quis nostrud
                <b class="categories__b">exercitation</b>
              </strong>
            </div>

            <p class="categories__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <nav class="categories__navigation">
            <AppButton class="categories__navigation-button" to="/product/jibits">Джибитсы</AppButton>
            <AppButton class="categories__navigation-button" to="/product/magnets">Магниты</AppButton>
            <AppButton class="categories__navigation-button" to="/product/keyrings">Брелоки</AppButton>
            <AppButton class="categories__navigation-button" to="/product/pullers">Пуллеры</AppButton>
            <AppButton class="categories__navigation-button" to="/product/patches">Патчи</AppButton>
            <AppButton class="categories__navigation-button" to="/product/kosters">Костеры</AppButton>
          </nav>
        </div>
      </div>
    </TheContainer>
  </section>

  <!-- SUBMIT-REQUEST -->
  <section class="submit-request">
    <TheContainer
      class="submit-request__container"
      size="lg"
    >
      <img
        alt=""
        class="submit-request__img"
        src="@assets/images/submit-request.png"
      />
      <div class="submit-request__wrapper">
        <img
          alt=""
          class="submit-request__personage"
          src="@assets/images/submit-request-personage.png"
        />
        <div class="submit-request__box">
          <p class="submit-request__description">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 5 минут.
          </p>
          <AppButton class="submit-request__btn">Оставить заявку</AppButton>
        </div>
      </div>
    </TheContainer>
  </section>

  <!-- CATEGORIES -->
  <section class="categories">
    <TheContainer class="categories__container">
      <div class="categories__wrapper">
        <img
          alt=""
          class="categories__img"
          src="@assets/images/categories-2.png"
        />
        <!-- TODO: Рефактор -->
        <img
          alt=""
          class="categories__personage"
          src="@assets/images/categories-personage-2.png"
          style="max-width: 568px"
        />

        <div class="categories__info">
          <div class="categories__inner">
            <div class="categories__box">
              <h2 class="categories__title">Lorem ipsum</h2>
              <strong class="categories__subtitle">
                Ut enim ad minim veniam, quis nostrud
                <b class="categories__b">exercitation</b>
              </strong>
            </div>

            <p class="categories__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <nav class="categories__navigation">
            <AppButton class="categories__navigation-button" to="/product/stickers">Стикеры</AppButton>
            <AppButton class="categories__navigation-button" to="/product/stickers3d">3d-стикеры</AppButton>
            <AppButton class="categories__navigation-button" to="/product/stickers-tg">Тг-стикеры</AppButton>
            <AppButton class="categories__navigation-button" to="/product/coloring">Раскраски</AppButton>
            <AppButton class="categories__navigation-button" to="/product/brandbook">Брендбук</AppButton>
            <AppButton class="categories__navigation-button" to="/product/mascot">Маскот</AppButton>
          </nav>
        </div>
      </div>
    </TheContainer>
  </section>
  <FeedbackFormBlock/>


</template>

<style lang="scss">

// MAIN-SCREEN
.main-screen {
  &__container {
    @include flex(center);
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-top: var(--spacing-2xl);
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 450px;
    align-self: stretch;
    gap: var(--spacing-md);

    max-width: var(--container-width-xl);
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  &__title {
    @include title();
  }

  &__description {
    font-size: var(--font-size-md);
    font-weight: 300;
    max-width: 700px;
  }

  &__advantages {
    @include flex(center);
    gap: var(--spacing-md);
  }
}

// ADVANTAGES-ITEM
.advantages-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &__title {
    color: var(--color-accent-100);
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-xl);
  }

  &__description {
    font-size: var(--font-size-md);
    font-weight: 300;
  }
}

// ABOUT
.about {
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }
}

// ABOUT-ARTICLE
.about-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  &__title {
    @include title();
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__strong {
    @include title(var(--color-primary-200), var(--font-size-lg), var(--font-family-primary));
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
}

// CATEGORIES
.categories {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__wrapper {
    position: relative;
  }

  &__title {
    @include title(var(--color-primary-200), var(--font-size-lx));
  }

  &__subtitle {
    color: var(--color-primary-200);
    font-size: var(--font-size-lg);
    text-transform: uppercase;
  }

  &__b {
    color: var(--color-accent-200);
  }

  &__img {
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--spacing-xl);
  }

  &__personage {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 667px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    min-width: 331px;
  }

  &__inner {
    display: flex;
    align-items: stretch;

    gap: var(--spacing-md);
    max-width: 804px;
  }

  &__navigation {
    max-width: 923px;
    display: flex;
    gap: 10px;
  }

  &__navigation-button {
    color: var(--color-primary-200);
  }
}

// SUBMIT-REQUEST
.submit-request {
  &__container {
    padding-top: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
  }

  &__img {
    width: 100%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    max-width: 331px;
    margin-bottom: 45px;
  }

  &__wrapper {
    display: flex;
    align-items: end;
    gap: var(--spacing-md);

    margin-top: -125px;
  }

  &__personage {
    max-width: 531px;
  }

  &__description {
    font-weight: 400;
    color: var(--color-primary-200);
  }

  &__btn {
    align-self: end;
  }
}
</style>
