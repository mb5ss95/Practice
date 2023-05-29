<template>
  <div>
    <!-- 
      :key vue에서 렌더링을 다시 할지 말지를 :key로 정한다
      key가 있다면 같은 값이라고 판단하기 때문에 랜더링을 하지 않는다.
      성능때문에 vue자체에서 dom을 갱신할지 정할때 사용하는게 key
     -->
    <div @click="moveDetail(list.id)" v-for="list in lists" :key="list.id" class="list-wrapper" >
      <div>
        {{list.title}}
      </div>
    </div>
  </div>
</template>

<script>
import {api} from "../../utils/axios"

export default {
  methods:{
    moveDetail(id){
      console.log(id);
      this.$router.push(`/todos/${id}`);
    }
  },

  data(){
      return{
    lists:[]
    }
  },

  async created(){
    this.$store.commit("SET_LOADING", true);
    const results = await api.jsonplaceholder.findAll();
    console.log(results);
    this.lists = results.data;
    this.$store.commit("SET_LOADING", false);
  }
}

</script>

<style>
  .list-wrapper{
    border: 1px solid black;
    padding: 20px;
  }
</style>