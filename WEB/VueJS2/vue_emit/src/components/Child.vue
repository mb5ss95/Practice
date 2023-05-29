<template>
  <div>
    Child
    <GrandChild 
    v-on:emitTest="changeNotice"
    :notice="notice" 
    :year="year">
    </GrandChild>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  props:["notice", "year"],
  components: { 
    GrandChild 
  },
  methods:{
    changeNotice(notice){
        console.log(notice)
        this.$emit("emitTestTwo", notice)
    }
  }
};
</script>

<style>
</style>
