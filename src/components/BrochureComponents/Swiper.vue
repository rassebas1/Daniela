<template>
  <swiper
    class="swiper-container"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :navigation="true"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in swiperSlides" :key="index + item">
      <img :src="item" alt="imagen" />
      <p>{{ CardInfo[index] }}</p>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/autoplay";
  import { computed, defineComponent } from "@vue/runtime-core";

  // Import Swiper styles
  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      CardInfo: {
        type: Object,
        required: true,
        default: {
          sectionName: "",
          paths: ["NO_IMAGE", "other image"],
          description: "",
        },
      },
    },

    setup(props) {
      const swiperSlides = computed(() => {
        return props.CardInfo.paths;
      });

      const onSlideChange = () => {
        console.log("slide change");
      };
      return {
        swiperSlides,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      };
    },
  });
</script>
<style lang="scss" scoped>
  .swiper-container {
    display: flex;
    width: 500px;
    height: 500px;
  }
</style>
