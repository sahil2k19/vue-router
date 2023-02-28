<template>
  <div>

    <h1>Jobs Details Page</h1>
    <p>{{ id }}</p>
  </div>
  
</template>

<script>
export default {
  props:['id'], // jobs.vue send params as props to us for that we need to make it true in router/index.js
  data(){
    return {
      // id: this.$route.params.id,
    }
  }
}
</script>

<style>

</style>