<script setup>
import { ref } from 'vue';

const props = defineProps({
  tag: String,
  title: String,
  image: Object,
  testimonials: Array,
});

const currentTestimonialIndex = ref(0);

const prevTestimonial = () => {
  if (currentTestimonialIndex.value > 0) {
    currentTestimonialIndex.value--;
  }else {
    currentTestimonialIndex.value = props.testimonials.length - 1;
  }
};

const nextTestimonial = () => {
  if (currentTestimonialIndex.value < props.testimonials.length - 1) {
    currentTestimonialIndex.value++;
  }else {
    currentTestimonialIndex.value = 0;
  }
};

</script>
<template>
  <div class="c-testimonial">
    <span class="c-testimonial__tag">{{ tag }}</span>
    <h2 class="c-testimonial__title">{{ title }}</h2>
  </div>
  <section class="c-testimonials">
    <div
      class="c-testimonials__item"

    >
      <div class="c-testimonials__item__image">
        <img
        :src="testimonials[currentTestimonialIndex].testimonials_list_image.url"
        :alt="testimonials[currentTestimonialIndex].testimonials_list_image.alt"
        />
        <div class="c-testimonials__item__image">
          <PrismicRichText class="c-testimonials__item__image__name" :field="testimonials[currentTestimonialIndex].testimonials_list_name" />
          <PrismicRichText class="c-testimonials__item__image__job"  :field="testimonials[currentTestimonialIndex].testimonials_list_job" />
        </div>
      </div>
      <div>
        <PrismicRichText :field="testimonials[currentTestimonialIndex].testimonials_list_text" />
      </div>
      <MyIcon class="c-testimonials__item__BR" name="IconFlecheG" variant="Orange" size="Small" @click="prevTestimonial"/>
    <MyIcon class="c-testimonials__item__BL" name="IconFlecheD" variant="Orange" size="Small" @click="nextTestimonial"/>
    </div>
    <div>
      <img src="Testimonials-Ph.jpg" alt="burger_sandwich" />
    </div>
  </section>
</template>
<style lang="scss">
.c-testimonial {
  margin: rem(70) rem(0);
  &__tag {
    display: block;
    font-size: $regular-font-size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
  }
  &__title {
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
    
  }
}
.c-testimonials {
  display: flex;
  flex-flow: row wrap;
  gap: rem(30);
  max-width: 1300px;
  margin: auto;
  align-items: center;

  &__item{
    background: $white;
    box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
    border-radius: rem(20);
    padding: rem(50);
    position: relative;

    &__BR{
        position: absolute;
        top: 50%;
        left: -3%;
        
        
    }
    &__BL{
        position: absolute;
        top: 50%;
        right: -3%;
    }

    &__image{
      &__name{
        font-size: $regular-font-size;
        font-weight: 700;
        color: $black;
      }
      &__job{
        font-size: $small-font-size;
        font-weight: 400;
        color: $black;
      }
    }
  }
  & > div {
    flex: 1;
  }
  & > div:nth-child(1){
      display: flex;
      flex-flow: column;
      gap: rem(30);
      & > div:nth-child(1){
      display: flex;
      justify-content: center;
      gap: rem(5);
      & > img{
          width: rem(75);
          height: rem(75);
          border-radius: 50%;
      }
      & > div{
          display: flex;
          flex-flow: column;
          gap: rem(10);
      }
      }
  }
}
</style>
