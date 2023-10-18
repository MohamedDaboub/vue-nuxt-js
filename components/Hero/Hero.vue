<script setup>
const env = useRuntimeConfig;
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});
const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
</script>

<template>
  <section class="c-hero">
    <div>
      <div class="c-hero__title">
        <!-- Convert prismic rich text field to full html text -->
        <PrismicRichText :field="title" />
      </div>
      <div class="c-hero__text">
        <!-- Convert prismic rich text field to full html text -->
        <PrismicRichText :field="text" />
      </div>
      <div class="c-hero__buttons">
        <div v-for="(button, index) in buttons" class="c-hero__button">
          <MyButton 
            :href="button.button_link.url"
            :variant="button.button_type"
            >{{ button.button_label }}</MyButton
          >
        </div>
      </div>
    </div>
    <div>
      {{ recipes }}
    </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  margin: rem(60);
  display: grid;
  // deux colonnes de 1fr
  grid-template-columns: repeat(2, 1fr);
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
