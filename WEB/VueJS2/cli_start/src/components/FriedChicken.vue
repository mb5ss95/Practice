<template>
  <div>
    Fried Chicken
    <ChickenChild :title="title" :salt="salt">
    </ChickenChild>
  </div>
</template>

<script>
import ChickenChild from "./ChickenChild.vue";
export default {
  props:["title", "salt"],
  components: {
    ChickenChild
  }
};
</script>

<style scoped>
</style>
