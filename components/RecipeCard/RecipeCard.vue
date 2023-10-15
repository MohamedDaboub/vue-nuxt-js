<script setup>
import MyIcon from '@/components/elements/MyIcon.vue'
import MyTitle from '@/components/elements/MyButton.vue'
import MyParagraph from '@/components/elements/MyParagraph.vue'
const props = defineProps({
  title: String,
  description: String,
  Icon: String,
});

</script>

<template>
  <div class="card">
    <div>
      <MyIcon  :name="Icon" variant="Orage Claire" size="Big"/>
    </div>
    <div class="card__content">
      <div>
        <MyTitle :content="title" title="h4"/>
      </div>
      <div>
        <MyParagraph :content="description"></MyParagraph>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.card{
    background: $white;
    width: rem(300);
    padding: rem(40);
    text-align: center;
    border-radius: rem(20);
    border: rem(1) $gray solid; 
    &__content{
        padding: rem(22) rem(0);
        text-align: center;
        > * + *{
            margin-top: rem(20);
        }
    }
}
</style>