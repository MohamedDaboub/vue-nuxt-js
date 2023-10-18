<script setup>
const store = useGlobalStore()

onMounted(()=>{
  // Set initial value to global store 'cart' from localStorage
  const cart = localStorage.getItem('cart')
  console.log(JSON.parse(cart))
})
</script>
<template>
  <div>
    <NuxtLayout />
  </div>
</template>
