<script setup>
const env = useRuntimeConfig
const props= defineProps({
    Title:Array,
    Text:Array,
    buttons:Array,
})
const {data:recipes}= await useAsyncData('recipes', async()=>{
    return $fetch(env.public.apiUrl + '/recipes')
})
</script>

<template>
    <section class="Hero">
        <div class="Hero__Title">
            <PrismicRichText :field="Title"/> 
        </div>
        <div>
            <PrismicRichText :field="Text"/> 
        </div>
        <!-- boucle for dans hero_buttons -->
        <div v-for="(button,index) in buttons" :key="index">
            <button v-if="button.button_Type === 'Default'" class="hero__button -default">
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </button>
            <button v-else class="hero__button -video">
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </button>
        </div>
        {{ recipes  }}
    </section>
</template>

<style lang="scss" scoped>
.Hero{
    &.__Title{

        strong{
            color: red;
        }

        

    }
}

</style>