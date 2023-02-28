<template>
  <div>

    <div v-if="job">
      <h1>{{job.title}}</h1>
    <p>{{ id }}</p>
    </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
  </div>
  
</template>

<script>
export default {
  props:['id'], // jobs.vue send params as props to us for that we need to make it true in router/index.js
  data(){
    return {
      job:null,
    }
  },
  mounted(){
        fetch('http://localhost:3000/jobs/'+this.id)
        .then(res=>res.json())
        .then(data=>this.job = data)
        .catch(err=>console.log(err.message));
    }
}
</script>

<style>

</style>