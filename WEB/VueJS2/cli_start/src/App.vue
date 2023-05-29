<template>
  <div id="app">
    <h1>App</h1>
    <FriedChicken
      :title="title"
      :salt="salt"
    />
  </div>
</template>

<script>
import FriedChicken from "./components/FriedChicken";
export default {
  components: {
    FriedChicken
  },
  data(){
    return{
      title:"치킨은 마시썽~",
      salt:30
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
