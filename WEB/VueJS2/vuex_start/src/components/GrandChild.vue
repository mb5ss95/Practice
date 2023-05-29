<template>
  <div>
    <h1>아들</h1>
    이름:{{$store.state.myName}}
    나이:{{$store.state.myAge}}
    <button v-on:click="changeAge">나이 변경</button>
  </div>
</template>

<script>
export default {
  methods:{
  changeAge(){
        this.$store.commit("SET_MY_AGE", 500);
    }
  },
  created(){
    console.log(this.$store.state)
  }
};
</script>

<style>
</style>
