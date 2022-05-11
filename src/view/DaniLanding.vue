<template>
  <div class="daniela-landing">
    <div class="landing-content">
      <FirstColumn />
      <RigthColumn />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import FirstColumn from "../components/FirstColumn.vue";
  import RigthColumn from "../components/RigthColumn.vue";
  import GlobeIcon from "../assets/GlobeIcon.vue";

  export default defineComponent({
    name: "DanielaLanding",
    components: { FirstColumn, RigthColumn, GlobeIcon },
    setup() {
      const contact = {
        address: "Calle 25 #35-39 Corferias Teusaquillo Bogotá, Colombia",
        phone: "+57 311 268 74 19",
        email: "daparoza@hotmail.com",
      };
      const socialNetwork = {
        behance: "https://www.behance.net/danielarodrigu",
        linkedIn:
          "https://www.linkedin.com/in/daniela-patricia-rodriguez-zapata/",
      };
      const languages = {
        spanish: 5,
        english: 2,
      };
      const interest = [
        "Viajar",
        "Pintar",
        "Historia",
        "Animales",
        "Diseño",
        "Baile",
      ];
      return {
        contact,
        languages,
        interest,
        socialNetwork,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .landing-content {
    display: flex;
  }
</style>
