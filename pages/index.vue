<script setup>
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))

// console.log(home.data.hero_title)
if (!home.value || error.value) {
  throw createError({statusCode: 404, message: 'Page jjjj not found'})
}
</script>
<template>
  <div class="">
    <!-- <RecipeCard v-bind="{title:'Titre de la recette', description:'une description'}"/>
    page d'accueil -->
    </div>
    <!-- donne moi le rendu juste le texte sans  -->
    <div class="hero">
       <Hero :Title="home.data.hero_title" :Text="home.data.hero_texte" :buttons="home.data.hero_buttons"/>
     <!-- <PrismicRichText v-bind="{field: home.data.hero_title}"/>  -->

    </div>

</template>


<style lang="scss">

</style>