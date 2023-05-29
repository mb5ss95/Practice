<template>
  <div>
    <main>
      <router-link to="/admin/menus/register">
        <b-button class="order-buttin w-100" variant="outline-dark"
          >메뉴 추가하기
        </b-button>
      </router-link>
      <div
        v-on:click="moveDetail(menu.id)"
        v-for="menu in menus"
        :key="menu.id">
        <div class="menu-container">
          <div
            class="menu-image"
            :style="`background-image:url(${setImage(menu.image_src)});`"
          ></div>
          <div class="menu-info-wrapper">
            <h2 class="menu-name">{{ menu.name }}</h2>
            <p class="menu-description">{{ menu.description }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { api } from "@/utils/axios";
export default {
  data() {
    return {
      menus: [],
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "메뉴 목록");
    const result = await api.menus.findAll();
    this.menus = result.data;
    console.log(this.menus);
  },
  methods: {
    setImage(image_src) {
      console.log(`http://3.36.112.248:8080/${image_src}`);
      return `http://3.36.112.248:8080/${image_src}`;
    },
    moveDetail(id){
      this.$router.push(`/admin/menus/${id}`);
    }
  },
};
</script>

<style scoped>
.menu-image {
  background-size: cover;
  height: 400px;
  width: 300px;
}

.menu-container {
  margin: 5px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
