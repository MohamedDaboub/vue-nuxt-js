<script setup>
const env = useRuntimeConfig()

const { data: recipes } = await useAsyncData('recipes', () => {
  return $fetch(env.public.apiUrl + '/recipes')
})

const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
client.getSingle("homepage")
);
if (!home.value || error.value) {
  throw createError({ statusCode: 404, message: "Page jjjj not found" });
}
useSeoMeta({
  title: home.value.data.meta_title,
  description: home.value.data.meta_description,
  image: home.value.data.meta_image.url,
});
console.log(recipes)
</script>
<template>
  <div class="">
  </div>
  <div class="hero">
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_texte"
      :buttons="home.data.hero_buttons"
    />
  </div>
  <Information :information="home.data.short_list" />
    <div class="c-Card">
      <span class="c-Card__tag">Product</span> 
      <h2 class="c-Card__title">Most Popular Items</h2>
      <div class="c-Card__recipes">
        <RecipeCard class="c-Card__recipes__item"
          v-for="recipe in recipes"
          v-bind="{ id: recipe.recipe_id, title: recipe.recipe_name, description: recipe.recipe_description , image: recipe.image_url}"
        />
      </div>
      <div class="c-Card__btn">
        <MyButton href="/" variant="rounded" :hasIcon="true" size="small">See More Products</MyButton>
      </div>
  </div>
  <Services 
  v-bind="{
          tag: 'Services',
      title: 'Why Choose Our Favorite Food',
  }"
  :Services="home.data.services_list" />

  <HowTo
    v-bind="{
      tag: 'How to work',
      title: 'Food Us An Important Part Of A Balanced Diet',
      items: home.data.how_to,
    }"
  />
  <Testimonials
    v-bind="{
      tag: 'Testimonials',
      title: 'Our Happy Client Says',
      testimonials: home.data.testimonials_list,
    }"/>
  <Newsletter/>
</template>


<style lang="scss">
.c-Card {
  
  &__tag{
    display: block;
    font-size: $regular-font-size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
}    
    &__title{
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
}
  &__recipes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(30);
    margin: rem(30) rem(80);

    &__item {
      gap: rem(30);
      border-radius: rem(30);
    }
  }
  &__btn{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
}
</style>
