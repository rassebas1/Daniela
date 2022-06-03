<template>
  <div class="navbar-container">
    <nav class="navbar-fixed">
      <div class="navbar-item" v-for="(item, index) in navbar" :key="index">
        <router-link :to="item">{{ index }}</router-link>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "NavBar",
    props: {
      navbarItem: {
        type: Object,
        default: {
          HOME: "/",
          BROCHURE: "/brochure",
          ABOUT: "/about",
        },
      },
    },
    setup(props) {
      const navbar = ref(props.navbarItem);
      return { navbar };
    },
  });
</script>
<style lang="scss" scoped>
  $h1-font-size: 54px;
  $p-font-size: 12px;
  $h3-font-size: 16px;
  $h2-font-size: 32px;
  $background-column-color: #fad1ce;
  $gray-color: #3c3c3b;
  $internal-gray-color: #7f7c7b;
  $h1-gray-color: #b0acab;
  .navbar-container {
    display: flex;
    height: 10vh;
    & .navbar-fixed {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      & .navbar-item {
        margin: 8px;
        & a {
          text-decoration: none;
          color: $gray-color;
          animation: all 1s ease-in-out;
        }
        & a:hover,
        a:active {
          color: $internal-gray-color;
          transform: scale(1.1);
        }
      }
    }
  }
</style>
