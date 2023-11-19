<script setup>
import { computed } from 'vue'
import MyIcon from './MyIcon.vue'
const props = defineProps({
  content: String,
  href: String,
  size: String,
  variant: String,
  hasIcon: Boolean
})

const className = computed(() => {
  return{
    ' -rounded': props.variant === 'rounded',
    ' -small': props.size === 'small',
    "-Icon": props.hasIcon === true

  }
})
</script>
<template>
  <a v-if="href" :href="href" class="button" :class="className"><slot>{{ content }}</slot><MyIcon name="IconChevronRight" size="Regular" variant="White" v-if="hasIcon"/></a>
  <button v-else :class="className"><slot>{{ content }}</slot><MyIcon name="IconChevronRight" size="Regular" variant="White" v-if="hasIcon"/></button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-block;
  color: $white;
  font-family: $primary-font-familly;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(33) rem(67);
  text-decoration: none;
  word-wrap: break-word;

  &.-rounded {
    background: $primary-color;
    border-radius: rem(30);
    font-weight: 500;
    padding: rem(26) rem(64);
  }

  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }
  &.-Icon{
    display: flex;
    align-items: center;
    gap: rem(27);
    padding: rem(8) rem(8);
    width: fit-content;
  }
}
</style>
