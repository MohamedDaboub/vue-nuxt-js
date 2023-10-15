<script setup>

</script>

<template>
  <header>
    <div class="logo">
      <img src="../assets/Logo.png" alt="Logo">
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
      <div>
        <MyIcon name="IconSearch"  ></MyIcon>
      </div>
      <input type="search" placeholder="Rechercher...">
      <MyIcon name="IconShopBag"  ></MyIcon>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .logo img {
      height: 50px;
      width: auto;
  }
.menu {
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;

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
    gap: 10px;  
    border-radius: rem(10);
    box-shadow: 0px rem(2) rem(10) rgba(0, 0, 0, 0.20);
    
    input[type="search"] {
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        outline: none;
    }
    }
}
  
</style>