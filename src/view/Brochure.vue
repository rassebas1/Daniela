<template>
  <div class="brochure-container">
    <PhotoCard
      v-for="item in allCardInfo"
      :cardInfo="item"
      :key="item.sectionName"
    ></PhotoCard>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import PhotoCard from "../components/PhotoCard.vue";
  export default defineComponent({
    name: "Brochure",
    components: { PhotoCard },
    setup() {
      const allCardInfo = [
        {
          sectionName: "Banos",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Exterior",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Inrerior",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Cocinas",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Jardines",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Recamara",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Garaje",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Rascacielos",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
        {
          sectionName: "Creativo",
          path: "https://picsum.photos/200/300",
          description: "this1 descripttion1",
        },
      ];
      return { allCardInfo };
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
    align-content: space-around;
    margin-top: 20px;
    height: auto;
    padding: 8px;
  }
</style>
