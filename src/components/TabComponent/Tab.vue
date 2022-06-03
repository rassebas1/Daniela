<template>
  <div class="tab-container__tabs">
    <div
      class="tab-container__tab"
      v-for="item in tabs"
      :key="item.id"
      :class="{ active: item.id === activeTab }"
      @click="changeTab(item.id)"
    >
      {{ item.name }}
    </div>
  </div>
  <div class="tab-container__content">
    <div
      class="tab-container__content-item"
      v-for="item in tabs"
      :key="item.id"
      :class="{ active: item.id === activeTab }"
      v-show="activeTab === item.id"
    >
      <Swiper class="swiper" :CardInfo="item"></Swiper>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "@vue/runtime-core";
  import Swiper from "../BrochureComponents/Swiper.vue";

  export default defineComponent({
    name: "TabContainer",
    components: { Swiper },
    setup() {
      const activeTab = ref(0);
      const tabs = [
        {
          id: 0,
          name: "Banos",
          paths: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
          ],
          description: "This is the first tab",
        },
        {
          id: 1,
          name: "Recamara",
          paths: ["https://picsum.photos/200/300"],
          description: "This is the second tab",
        },
        {
          id: 2,
          name: "Cocina",
          paths: ["https://picsum.photos/200/300"],
          description: "This is the third tab",
        },
      ];
      const changeTab = (id: number) => {
        activeTab.value = id;
      };
      return { activeTab, tabs, changeTab };
    },
  });
</script>
<style lang="scss" scoped>
  .tab-container__tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 12px;
    animation: all 1s ease-in-out;
    width: 100%;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    height: 50px;
    & .tab-container__tab {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #3c3c3b;
      background-color: #fad1ce;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      margin-left: 2px;
      margin-right: 2px;
      &.active {
        background-color: #3c3c3b;
        color: #fad1ce;
      }
    }
  }
  .tab-container__content .swiper {
    display: flex;
    width: 500px;
    height: 500px;
  }
</style>
