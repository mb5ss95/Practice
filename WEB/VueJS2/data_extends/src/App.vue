<template>
  <div id="app">
    <h1>할아버지</h1>
    <button v-on:click="changeAge"> 젊어지는 물약 </button>
    <Child 
      v-bind:mySchoolProp="mySchool"
      v-bind:myAgeProp="myAge"
    />
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  components: {
    Child,
  },
  data(){
    return{
      mySchool:"ssafy",
      myAge:"40"
    }
  },
  methods:{
    changeAge() {
      this.myAge = 20;
    }
  }
};
</script>

<style>
</style>
