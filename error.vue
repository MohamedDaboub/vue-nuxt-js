<script setup>
const props = defineProps({
  statusCode: Number,
  message: String,
  error: Object
})

</script>

<template>
    <div class="p-error">
        {{ statusCode }}
        {{ message }}
        {{ error }}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam harum. Adipisci ex impedit voluptatum sequi, porro magni cumque sed hic facilis iusto laboriosam praesentium nihil, est, recusandae nam non.
    </div>

</template>

<style lang="scss" scoped>

</style>