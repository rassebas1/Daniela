<template>
  <div class="photo-card__container">
    <img
      v-for="item in showCase.path"
      :key="item"
      :src="showCase.path"
      alt="image"
    />
    <p>{{ showCase.description }}</p>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "PhotoCard",
    props: {
      cardInfo: {
        type: Object,
        default: {
          sectionName: "SECTION_NAME",
          path: ["NO_IMAGE", "NO_IMAGE"],
          description: "NO_DESCRIPTION",
        },
      },
    },
    setup(props) {
      const showCase = ref(props.cardInfo);
      return { showCase };
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
  .photo-card__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 12px;
    animation: all 1s ease-in-out;
    width: 300px;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    height: 350px;
    & img {
      width: 300px;
      height: 300px;
    }
  }
  .photo-card__container:active,
  .photo-card__container:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
</style>
