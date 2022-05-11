<template>
  <globe-icon size="1.5x" class="custom-class"></globe-icon>
</template>

<script>
  import { defineComponent } from "@vue/runtime-core";
  import { GlobeIcon } from "vue-feather-icons";

  export default defineComponent({
    components: {
      GlobeIcon,
    },
  });
</script>
