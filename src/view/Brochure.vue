<template>
  <div class="brochure-container">
    <Tab></Tab>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  import PhotoCard from "../components/BrochureComponents/PhotoCard.vue";
  import Swiper from "../components/BrochureComponents/Swiper.vue";
  import Tab from "../components/TabComponent/Tab.vue";
  export default defineComponent({
    name: "Brochure",
    components: { PhotoCard, Swiper, Tab },
    setup() {
      
      return {};
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
  .brochure-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
    margin-top: 20px;
    height: auto;
    padding: 8px;
    & .swiper {
      width: 400px;
      height: 400px;
      margin-top: 20px;
    }
  }
</style>
