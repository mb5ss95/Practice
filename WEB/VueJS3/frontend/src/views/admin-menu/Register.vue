<template>
  <div>
    <div class="form-wrapper">
      <div>메뉴 이름 : <input v-model="name" type="text"/></div>
      <div>메뉴 설명 : <input v-model="description" type="text"/></div>
      <input v-on:change="fileChange" type="file"/>
      <button v-on:click="create">메뉴 추가하기</button>
    </div>
    <div class="image-wrapper" v-if="file">
      <img :src="setURL(file)" width="100%"/>
    </div>
  </div>
</template>

<script>
import {api} from "@/utils/axios";

export default {
  data(){
    return {
      name:null,
      description:null,
      file:null,
    };
  },  
  async created() {
    this.$store.commit("SET_TITLE", "메뉴 추가하기");
  },
  methods: {
    fileChange(e){
      console.log(e.target.files);
      this.file = e.target.files[0];
    },
    setURL(file){
      console.log(file);
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);
      return imageURL;
    },
    async create(){
      if(!this.name || !this.description || !this.file){
        alert("빈 값이 있습니다. 내용을 작성해 주십시오.")
      }
      const result = await api.menus.create(
        this.name,
        this.description,
        this.file
      );
      console.log(result);
      if(result.data.success){
        alert(result.data.message);
        this.$router.push("/admin/menus");
      }
      else{
        alert(result.data.message);
      }
    }
  }
}
</script>

<style scoped>
.form-wrapper{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border:1px solid black;
  padding:20px;
}

.form-wrapper>*{
  margin:10px;
}

.image-wrapper{
  margin-top:30px;
}
</style>
