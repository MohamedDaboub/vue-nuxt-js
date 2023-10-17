<script setup>
const props = defineProps({
  tag: String,
  title: String,
  items: Array,
})
const isOdd = (index) =>{
    return index % 2 !== 0;
}
</script>

<template>
<section class="c-how-to">
    <span class="c-how-to__tag">{{ tag }}</span> 
    <h2 class="c-how-to__title">{{ title }}</h2>
    <div class="c-how-to__list">
        <div :class="['c-how-to__item']" v-for="(item,index) in items" :key="index">
            <HowToItem :title="item.how_to_title" :content="item.how_to_content" :image="item.how_to_image" :reversed="isOdd(index)"/>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>

.c-how-to__tag{
    display: block;
    font-size: $regular-font-size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
}
.c-how-to__title{
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
}
.c-how-to{
    &__list{
        display: flex;
        flex-flow: row wrap;
    }
    &__item{
        flex: 1;
    }
}

</style>