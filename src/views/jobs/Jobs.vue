<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title:'UX developer', id:1 , details:'lorem'},
                {title:'Web Developer', id:2, details: 'lorem'},
                {title:'Web Developer', id:2, details: 'lorem'},
            ]
        }
    }
}
</script>

<style>

</style>