<script setup>
const props = defineProps({
    Services: Array,
});
</script>

<template>
  <section class="c-Services">
    <div v-for="item in Services" class="c-Services__item">
      <div class="c-Services__icon">
        <img :src="`/icons/${item.services_list_icon}.svg`" alt="" />
      </div>
      <div class="c-Services__title">
        <PrismicRichText :field="item.services_list_title" />
      </div>
      <div class="c-Services__text">
        <PrismicRichText :field="item.services_list_texte" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-Services {
  display: flex;
  flex-flow: row wrap;
  border-radius: rem(20);
  padding: rem(35);
  margin: rem(20) rem(60);

  box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
  &__item {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    &:nth-child(2) {
      border-left: 2px solid $gray;
      border-right: 2px solid $gray;
    }
  }
  &__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: $secondary-color;
    stroke: $white;
    border-radius: 50%;
  }
  &__title {
    font-weight: 700;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__text {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
