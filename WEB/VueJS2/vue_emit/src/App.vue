<template>
  <div>
    할아버지
    <Child 
    v-on:emitTestTwo="changeNotice"
    :notice="notice" 
    :year="year"></Child>
  </div>
</template>
<script>
import Child from "./components/Child"
export default {
  components:{
    Child
  },
  data(){
    return{
      notice:"추석 잘보내세요",
      year:2022
    }
  },
  methods:{
    changeNotice(notice){
      console.log(notice)
    }
  }
}
</script>

<style>

</style>
