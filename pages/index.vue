<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

// console.log(home.data.hero_title)
if (!home.value || error.value) {
  throw createError({ statusCode: 404, message: "Page jjjj not found" });
}
useSeoMeta({
  title: home.value.data.meta_title,
  description: home.value.data.meta_description,
  image: home.value.data.meta_image.url,
});
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
  <Services :Services="home.data.services_list" />

  <HowTo
    v-bind="{
      tag: 'How to work',
      title: 'Food Us An Important Part Of A Balanced Diet',
      items: home.data.how_to,
    }"
  />
</template>

<style lang="scss"></style>
