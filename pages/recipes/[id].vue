:<template>
  <div>
    <h1>page {{ route.params.id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style>

</style>