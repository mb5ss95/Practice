<template>
  <div>

    <router-view/>
    <div v-if="$store.state.loading" class="spinning">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      myName : ""
    }
  }
}
</script>


<style>
  .spinning{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
</style>
