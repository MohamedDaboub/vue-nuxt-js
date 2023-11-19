<script setup>

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
client.getSingle("homepage")
);
</script>

<template>
  <section class="c-hero">
    <div>
      <button class="c-hero__bike">
        Bike Delivery
        <img  class="c-hero__bike__img" src="../../assets/bikedelivery.jpg" alt="bike"/>
      </button>
      <div class="c-hero__title">
        <PrismicRichText :field="title" />
      </div>
      <div class="c-hero__text">
        <PrismicRichText :field="text" />
      </div>
      <img class="c-hero__vect" src="../../assets/Hero_vect.jpg" alt="fleche"/>
      <div class="c-hero__buttons">
        <div v-for="(button, index) in buttons" :key="index" class="c-hero__button">
          <MyButtonPrismic
            :href="button.button_link.url"
            :variant="button.button_type"
            >{{ button.button_label }}</MyButtonPrismic
          >
        </div>
      </div>
    </div>
  <div >
    <MyCardPro class="c-hero__Card" :MyCardPro="home.data.card_groupe" />
  </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  margin: rem(10) rem(60);
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  &__vect{
    position: absolute;
    top: 20%;
    left: 30%;
    width: 30%;
  }
  &__bike {
    display: flex;
    align-items: center;  
    justify-content: center;
    gap: rem(35);
    border: none;
    border-radius: rem(15);
    color: $primary-color;
    background: $secondary-color;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(5) rem(10);
    font-size: $regular-font-size;
    margin-bottom: rem(10);
    &__img{
      border-radius: 25px;
      width: 54px;
      height: 54px;
    }
  }
  &__title {
    font-size: $giant-font-size;
    font-weight: 700;
    line-height: 1.2;
    color: black;
    strong {
      color: orange;
    }
  }
  &__text {
    font-size: 18px;
    line-height: 1.1;
    color: black;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
  &__buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
}
</style>
