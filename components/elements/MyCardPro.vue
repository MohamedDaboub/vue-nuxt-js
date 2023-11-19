<script setup>
const props = defineProps({
  MyCardPro: Array,
  image: Object,
});
</script>
<template>
  <section class="AllCard" >
    <div class="card" v-for="item in MyCardPro" :key="item">
      <div class="card__Image">
        <img         :src="item.card_groupe_img.url"
          :alt="item.card_groupe_img.alt"/>
      </div>
      <div class="card__content">
        <div>
          <div class="card__content__Gap" >
              <PrismicRichText :field="item.card_groupe_titre"  />
          </div>
          <div class="card__content__Gap" >
              <PrismicRichText :field="item.card_groupe_texte"  />
          </div>
          <div class="card__content__Gap">
              <PrismicRichText :field="item.card_groupe_prix"  />
          </div>
        </div>
        <div class="card__content__Icon">
          <MyIcon name="IconFlecheD" variant="black" Shadow/>
          <MyIcon name="IconFlecheG" Shadow/>
        </div>
      </div>
    </div>
  </section>
</template>  
<style lang="scss">
.AllCard{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: rem(90) rem(0);
    margin-left:150px ;
}
.AllCard::before{
    content: "";
    background: linear-gradient(200deg, #D9D9D9 0%, #fff 70%);
    border-radius: rem(30);
    display: block;
    height: 100%;
    position: absolute;
    top: rem(0);
    right: rem(-15);
    width: 30%;
    z-index: -1;
    }
  .card {
      position: relative;
      max-width: rem(250);
      border-radius: rem(20);
      box-shadow: 0px rem(2) rem(30) rgba(0, 0, 0, 0.1);
      margin: rem(60) rem(0);
      padding: rem(10);
      background: $white;
      &__Image {
        position: absolute;
          width: 90%; 
          transform: translateX(3%) translateY(-70%);
        filter: drop-shadow(0px rem(0) rem(10) rgba(0, 0, 0, 0.20));
      }
      &__content {
        //   padding: rem(20);
          margin: rem(30) rem(0);
        //   justify-content: center; 
        //   height: rem(250); 
          text-align: center;
          &__Gap {
              padding: rem(3);
              margin: 0;
              font-size: $regular-font-size;
              Strong{
                color: #EE140A;
              }
              em{
                font-weight: 700;
                font-size: $medium-font-size;
              }
          }
          
          &__Icon {
              position: absolute; 
              bottom: rem(-10); 
              left: 50%;
              transform: translateX(-50%) translateY(30%); 
  
              display: flex;
              gap: rem(30);
          }
      }
  }
  
</style>