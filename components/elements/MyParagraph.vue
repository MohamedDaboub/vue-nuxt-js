<script setup>
defineProps({
  paragraphe_Size: String,
  content: String
})
</script>

<template>
  <p class="p2" v-if="paragraphe_Size === 'p2'">{{ content }}</p>
  <p class="p1" v-else>{{ content }}</p>
</template>

<style lang="scss" scoped>
.p1{
    font-size:$regular-font-size;
    font-weight:600
}
.p2{
    font-size:$small-font-size;
}

</style>