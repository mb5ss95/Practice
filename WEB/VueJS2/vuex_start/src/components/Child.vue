<template>
  <div>
    <h1>아버지</h1>
    <div>이름:{{$store.state.myName}}</div>
    <div>나이:{{$store.state.myAge}}</div>
    <GrandChild/>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  components: { 
    GrandChild 
  },
  created(){
    console.log(this.$store.state)
  }
};
</script>

<style>
</style>
