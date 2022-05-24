<template>
  <div class="stars-container">
    <div class="star-item" v-for="(item, index) in skills" :key="index">
      <h3>{{ index.toUpperCase() }}</h3>
      <StarRating
        :rating="item"
        :star-size="20"
        showControl="false"
        inactive-color="#7f7c7b"
        active-color="#3c3c3b"
        :read-only="true"
        :increment="0.01"
      ></StarRating>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  // @ts-ignore
  import StarRating from "vue-star-rating";

  export default defineComponent({
    name: "StarsComponent",
    components: { StarRating },
    props: {
      skills: {
        type: Object,
        default: {
          autocad: 0,
          revit: 0,
          rino: 0,
          sketchup: 0,
          illustrator: 0,
          photoshop: 0,
          lumion: 0,
          excel: 0,
        },
      },
    },
    setup(props) {
      const skills = ref(props.skills);
      return { skills };
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
  .stars-container {
    display: flex;
        height: 150px;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > div {
      display: flex;
      width: 228px;
      margin: 4px;
      justify-content: space-between;
      align-items: center;
      h3 {
        margin: 0px;
        font-size: $h3-font-size;
        color: $gray-color;
      }
    }
  }
</style>
