<script setup>

</script>

<template>
    <section class="c-newsletter">
        <div class="c-newsletter__img">
            <img src="../../assets/burger_sandwich.jpg" alt="burger_sandwich">
        </div>
        <div class="">
            <h3 class="c-newsletter__title">Subcribe To Our Newsletter</h3>
            <p class="c-newsletter__p">Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
            <div class="c-newsletter__email">
                <input class="c-newsletter__email__input" type="email" id="email" placeholder="Type your email....." />
                <MyButton variant="rounded" size="small" content="SUBCRIBE" href="/"/>
            </div>
        </div>
    </section>

</template>

<style lang="scss" >
.c-newsletter{
    // grid en 2 colonnes background black et image qui donne un effet qui sort du background et centre 
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $black;
    color: $white;
    // padding: rem(40);
    gap: rem(5);
    margin: rem(100);
    border-radius: rem(20);

    &__img{
        position: relative;
        & img{
            position: absolute;
            top: -30%;
            width: 80%;
        }
    }
    &__title{
        font-size: $big-font-size;
        font-weight: 700;
        padding: rem(45) rem(0);
    }
    &__p{
        font-size: $regular-font-size;
        font-weight: 400;
        padding: rem(5) rem(0);
        padding-right: rem(150);
    }  
    &__email {
    background-color: $white;
    justify-content: space-between;
    border-radius: rem(10);
    box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
    font-family: $primary-font-familly;
    font-size: $small-font-size;
    display: flex;
    align-items: center;
    padding: rem(4) rem(10);
    // width: fit-content;
    border: none;
    outline: none;
    width: 70%;
    margin: rem(20) rem(1);
    &__input {
      border: none;
      outline: none;
    }
  }
}
</style>