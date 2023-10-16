<script setup>

</script>

<template>
  <header>
    <div class="logo">
      <img src="./components/layout/assets/Logo.png" alt="Logo">
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Shope</a></li>
      </ul>
    </nav>
    <div class="right-side">
      <div class="right-side--Search">
        <MyIcon name="IconSearch"  ></MyIcon>
        <input type="search" placeholder="Rechercher...">
      </div>
      <MyIcon class="right-side--border" name="IconShopBag"  ></MyIcon>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: rem(20) rem(50);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .logo img {
      height: rem(50);
      width: auto;
  }
.menu {
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: rem(15);

        li {
            a {
                text-decoration: none;
                color: black;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.right-side {
    display: flex;
    align-items: center;
    gap: rem(10);  
    border-radius: rem(10);
    box-shadow: 0px rem(2) rem(10) rgba(0, 0, 0, 0.20);
    padding: rem(5);
    
    input[type="search"] {
        border: none;
        outline: none;
    }
    &--Search{
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: rem(15);
    }
    &--border{
        border-left: 1px solid $gray;
        border-radius: 0px 10px 10px 0px;
    }
    }
}
  
</style>