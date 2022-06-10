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
  import FirstColumn from "../components/CVComponents/FirstColumn.vue";
  import RigthColumn from "../components/CVComponents/RigthColumn.vue";

  export default defineComponent({
    name: "DanielaLanding",
    components: { FirstColumn, RigthColumn },
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
    // width: 100vw;
    height: 100%;
  }
  @media screen and (max-width: 640px) {
    .landing-content {
      // width: 100%;
      margin: 0px;
      padding: 4px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
