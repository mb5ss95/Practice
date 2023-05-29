<template>
  <div>
    GrandChild
    <div>공지 : {{year}}년 {{notice}}</div>

    <button v-on:click="changeNotice">공지 변경</button>
  </div>
</template>

<script>
export default {
    props:["notice", "year"],
    methods:{
        changeNotice(){
            //emit으로 부모에게 데이터 변경 요청
            this.$emit("emitTest", "맛있는거 많이 드세요!")
        }
    }
}
</script>

<style scoped>
</style>
