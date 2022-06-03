<template>
  <div class="home-container">
    <Swiper class="home-swiper" :CardInfo="categories"></Swiper>
    <div v-for="item in homeItems" :key="item.title" class="home-item">
      <img :src="item.url" alt="HOME_IMG" />
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    onMounted,
    onUpdated,
    ref,
  } from "@vue/runtime-core";
  import Swiper from "../components/BrochureComponents/Swiper.vue";
  import { useStore } from "vuex";
  type HomeItem = {
    title: string;
    url: string;
    description: string;
  };

  export default defineComponent({
    name: "Home",
    components: { Swiper },
    setup() {
      const store = useStore();
      const paths = computed(() => {
        return store.state.paths;
      });
      const categories = ref([
        {
          sectionName: "baños",
          paths: ref<string[]>([]),
          description: "",
        },
        {
          sectionName: "recamaras",
          paths: ref<string[]>([]),
          description: "recamaras",
        },
        {
          sectionName: "cocinas",
          paths: ref<string[]>([]),
          description: "cocinas",
        },
      ]);

      const homeItems = ref<HomeItem[]>([
        {
          title: "first Title",
          url: "first url",
          description: "first description",
        },
        {
          title: "second Title",
          url: "second url",
          description: "second description",
        },
      ]);
      onMounted(() => {
        homeItems.value.map((item, index) => {
          item.url = paths.value[index];
        });
        categories.value.map((item, index) => {
          item.paths.concat(paths.value[index + 2]);
        });
        console.log(homeItems.value);
        console.log(categories.value);
      });
      onUpdated(() => {});
      return { homeItems, paths, categories };
    },
  });
</script>

<style lang="scss" scoped>
  .home-container {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    & > .home-swiper {
      width: 500px;
      height: 500px;
    }
    & .home-item {
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > img {
        width: 300px;
        height: 300px;
      }
      & > h1 {
        font-size: 2rem;
        font-weight: bold;
        color: black;
        margin: 4px;
      }
      & > p {
        font-size: 1rem;
        color: Black;
        margin: 4px;
      }
    }
  }
</style>
