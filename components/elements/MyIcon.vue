<script setup>
import { computed } from 'vue'
import IconCommunityVue from "../icons/IconCommunity.vue";
import IconDocumentationVue from "../icons/IconDocumentation.vue";
import IconSupportVue from "../icons/IconSupport.vue";
import IconToolingVue from "../icons/IconTooling.vue";
import IconEcosystemVue from "../icons/IconEcosystem.vue";
import IconFlecheD from '../icons/IconFlecheD.vue';
import IconFlecheG from '../icons/IconFlecheG.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconTwitter from '../icons/IconTwitter.vue';
import Iconlinkedin from '../icons/Iconlinkedin.vue';
import IconFacebook from '../icons/IconFacebook.vue';
import IconChevronRight from '../icons/IconChevronRight.vue';
import IconSearch from '../icons/IconSearch.vue';
import IconTime from '../icons/IconTime.vue';
import IconLocation from '../icons/IconLocation.vue';
import IconPhone from '../icons/IconPhone.vue';
import IconShopBag from '../icons/IconShopBag.vue';
import IconStar from '../icons/IconStar.vue';
import IconPolygon from '../icons/IconPolygon.vue';
import IconCamion from '../icons/IconCamion.vue';
import IconEat from '../icons/IconEat.vue';
import IconEat2 from '../icons/IconEat2.vue';
const props = defineProps({
  name: String,
  variant: String,
  size: String,
  Shadow: Boolean,
})
const className = computed(() => {
  return{
    '-Orange': props.variant === 'Orange',
    '-black': props.variant === 'black',
    '-Orage-Claire': props.variant === 'Orage Claire',
    '-White': props.variant === 'White',
    '-Small': props.size === 'Small',
    '-Regular': props.size === 'Regular',
    '-Big': props.size === 'Big',
    '-shadow': props.Shadow === true,
  }
})
const getIcon = computed(()=>{
  switch(props.name){
  case 'community':
    return IconCommunityVue
  case 'Documentation':
    return IconDocumentationVue
  case 'Support':
    return IconSupportVue
  case 'Tooling':
    return IconToolingVue
  case 'IconFlecheD':
    return IconFlecheD
  case 'IconFlecheG':
    return IconFlecheG
  case 'IconInstagram':
    return IconInstagram
  case 'IconTwitter':
    return IconTwitter
  case 'Iconlinkedin':
    return Iconlinkedin
  case 'IconFacebook':
    return IconFacebook  
  case 'IconChevronRight':
    return IconChevronRight 
  case 'IconSearch':
    return IconSearch   
  case 'IconTime':
    return IconTime  
  case 'IconLocation':
    return IconLocation
  case 'IconPhone':
    return IconPhone
  case 'IconShopBag':
    return IconShopBag
  case 'IconStar':
    return IconStar
  case 'IconPolygon':
    return IconPolygon
  case 'IconCamion':
    return IconCamion
  case 'IconEat':
    return IconEat
  case 'IconEat2':
    return IconEat2
  default:
    return IconEcosystemVue
  }
})
</script>
<template>
  <i class="fleche" :class="className">
    <component :is="getIcon" />
  </i>
</template>
<style lang="scss" scoped>

.fleche {
  align-items: center;
    border-radius: 100%;
    background: $white;
    fill: $black;
    display: inline-flex;
    height: rem(50);
    justify-content: center;
    width: rem(50);
    stroke: $black;

  &.-Orange {
    background: $primary-color;
    fill:$white;
    stroke: $white;

  }
  &.-Small {
    height: rem(40);
    width: rem(40);
  }
  &.-Regular {
    height: rem(50);
    width: rem(50);
  }
  &.-Big {
    height: rem(105);
    width: rem(105);
  }
  &.-black {
    background: $black;
    fill:$white;
    stroke:$white;
  }
  &.-Orage-Claire{
        background: $secondary-color;
        fill:$primary-color;
        stroke:$primary-color;
    }
    &.-White{
        background: $white;
        fill:$primary-color;
        stroke:$primary-color;
    }
  &.-shadow{
      box-shadow: 0px rem(0) rem(25) rgba(131,165,255, 0.25);
  }

}
</style>