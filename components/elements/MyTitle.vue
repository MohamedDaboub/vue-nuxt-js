<script setup>
import { computed } from 'vue'
const props = defineProps({
  content: String,
  title: String,
})
const className = computed(() => {
  return{
    "-h1": props.title === 'h1',
    "-h2": props.title === 'h2',
    "-h3": props.title === 'h3',
    "-h4": props.title === 'h4',
    "-h5": props.title === 'h5',
  }
})

</script>
<template>
  <h2 :class="className " v-if="title === 'h2'">{{ content }}</h2>
  <h3 :class="className" v-else-if="title === 'h3'">{{ content }}</h3>
  <h4 :class="className" v-else-if="title === 'h4'">{{ content }}</h4>
  <h5 :class="className" v-else-if="title === 'h5'">{{ content }}</h5>
  <h1 :class="className" v-else >{{ content }}</h1>

</template>
<style lang="scss" scoped>
.-h1{
    font-size: $giant-font-size;
    font-weight: 700;
}
.-h2{
    font-size: $bigger-font-size;
    font-weight: 700;
}
.-h3{
    font-size: $big-font-size;
    font-weight: 700;
}
.-h4{
    font-size: $medium-font-size;
    font-weight: 700;
}
.-h5{
    font-size: $regular-font-size;
    font-weight: 700;
}

</style>