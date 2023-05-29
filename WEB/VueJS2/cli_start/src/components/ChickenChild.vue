<template>
  <div>
    ChickenChild
    <button v-on:click="changeFlag"> flag 변경</button>
    <div v-if="chickenFlag">
        title : {{title}}
        salt : {{salt}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "salt"],
  data(){
    return {
        chickenFlag : false
    }
  },
  methods:{
    changeFlag(){
        this.chickenFlag = !this.chickenFlag
    }
  }
};
</script>

<style scoped>
</style>
