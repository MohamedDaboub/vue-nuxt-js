<script setup>
const props = defineProps({
  tag: String,
  title: String,
  Services: Array,
});
</script>

<template>
  <div class="c-Service">
    <span class="c-Service__tag">{{ tag }}</span>
    <h2 class="c-Service__title">{{ title }}</h2>
  </div>
  <section class="c-Services">
    <div v-for="item in Services" class="c-Services__item">
      <div class="c-Services__icon">
        <img :src="`/icons/${item.services_list_icon}.svg`" alt="" />
      </div>
      <div class="c-Services__title">
        <PrismicRichText :field="item.services_list_title" />
      </div>
      <div class="c-Services__text">
        <PrismicRichText :field="item.services_list_texte" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-Service {
  margin: rem(70) rem(0);
  &__tag {
    display: block;
    font-size: $regular-font-size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
  }
  &__title {
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
  }
}
.c-Services {
  display: flex;
  justify-content: center;
  gap: rem(30);
  margin: rem(70) rem(0);

  &__item {
    border-radius: rem(10);
    border: $gray solid rem(1);
    display: flex;
    padding: rem(45);

    flex-direction: column;
    // justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      background-color: #ffffff;
      border: rem(1) solid #b6b6b6;
    }
  }
  &__icon {
    margin-bottom: rem(20);
    background-color: $secondary-color;
    border-radius: 50%;
    height: rem(30);
    padding: rem(10);
    width: rem(30);
  }
  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
    margin-bottom: rem(20);
  }
  &__text {
    font-size: $regular-font-size;
    font-weight: 400;
    text-align: center;
  }
}
</style>
