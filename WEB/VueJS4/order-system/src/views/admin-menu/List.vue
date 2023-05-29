<template>
  <div>
    <div v-for="menu in menus" :key="menu.id">
      <div class="menu-container">
        <div class="menu-image"></div>
        <div class="menu-info-wrapper">
          <h2 class="menu-name">{{ menu.name }}</h2>
          <p class="menu-description">{{ menu.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../utility/axios";
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
};
</script>

<style>
</style>
