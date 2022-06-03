<script lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

  import { defineComponent, onMounted } from "@vue/runtime-core";
  import { useStore } from "vuex";
  import DaniLanding from "./view/DaniLanding.vue";
  import Brochure from "./view/Brochure.vue";
  import NavBar from "./components/NavBar.vue";

  export default defineComponent({
    setup() {
      const store = useStore();
      const navbar = {
        HOME: "/",
        BROCHURE: "/brochure",
        ABOUT: "/about",
      };
      onMounted(async () => {
        await store.dispatch("getImagePaths");
      });
      return { navbar };
    },
    components: { Brochure, DaniLanding, NavBar },
  });
</script>

<template>
  <NavBar :navbarItem="navbar"></NavBar>
  <router-view />
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    box-sizing: border-box;
  }
</style>
