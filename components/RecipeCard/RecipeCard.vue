<script setup>
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  image: String
})

const store = useGlobalStore()

const buttonLabel = computed(() => store.isInCart(props.id) ? 'Remove from cart' : 'Add to cart')

const onClick = () => {
  if (store.isInCart(props.id)) {
    store.removeFromCart(props.id)
  } else {
    store.addToCart(props.id)
  }
}
</script>
<template>
  <section>
  <div class="c-recipe-card">
    <div class="c-recipe-card__image">
      <img class="c-recipe-card__image" :src="image" alt="">
    </div>
    <div class="c-recipe-card__content">
      <p class="c-recipe-card__title">{{ title }}</p>
      <p class="c-recipe-card__description">{{ description }}</p>
      <RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink>
      <div class="c-recipe-card__button" @click="onClick">
        {{ buttonLabel }}
      </div>
    </div>
  </div>
  </section>
</template>

<style lang="scss">
.c-recipe-card {
  background-color: white;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  border-radius: rem(10);

  &__content {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    padding: rem(20);
  }

  &__image {
    width: 100%;
    height: rem(300);
    border-radius: rem(10) rem(10) 0 0;

    :hover{
      scale: 1.05;
      // avec transition
      transition: all 0.5s ease-in-out;
    }
  }

  &__title {
    font-size: rem(22);
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: rem(10);
    }
  }

  &__description {
    font-size: rem(16);
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: rem(10);
    }
  }

  &__button {
    display: inline-block;
    background-color: orange;
    color: white;
    padding: rem(10) rem(20);
    border-radius: rem(10);
    cursor: pointer;
    &:not(:first-child) {
      margin-top: rem(30);
    }
  }
}
</style>