<template>
  <div class="rigth-container">
    <div class="education-content">
      <RigthEntry :entry-info="education" />
    </div>
    <div class="experience-content">
      <RigthEntry
        v-for="item in experience"
        :key="item.title"
        :entryInfo="item"
      ></RigthEntry>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import RigthEntry from "./RigthEntry.vue";

  export default defineComponent({
    name: "RigthColumn",
    components: { RigthEntry },
    setup() {
      const education = {
        title: "Education",
        description:
          "Arquitecta con preferencia por el diseño de espacios y construcción, con dominio de software como Autocad, Revit, Illustrator, Sketchup, Photoshop, Rhino y Excel; con experiencia formativa en supervisión y coordinación de personal, seguimiento de actividades operativas, control de inventarios, cierres y apertura de bodega, asesoría y servicio al cliente, elaboración de informes de gestión, reporte de novedades, con gran capacidad analítica, adaptabilidad a todo tipo de ambiente de trabajo, liderazgo y determinación en cualquier circunstancia; con un amplio sentido del respeto por la dignidad humana, el desarrollo social y el cuidado del medio ambiente.",
        date: null,
      };
      const experience = [
        {
          title:
            "DISEÑOS E INSTALACIONES DE COLOMBIA S.A.S | AUXILIAR EN GESTION DE PROYECTOS",
          description:
            "Planificar y orientar los procesos del proyecto de principio a fin. Los procesos se guían por cinco etapas: iniciación, planificación, ejecución, control y cierre",
          date: "ABRIL 2016 - OCTUBRE 2020 BOGOTÁ, COL",
        },
        {
          title: "GRUPO C&G COLOMBIA SAS | COMERCIAL",
          description: "Practicas profesionales | Área comercial y técnica.",
          date: "FEBRERO 2021 - AGOSTO 2021 BOGOTÁ, COL",
        },
        {
          title: "FABRICA DE CASETONES JAR SAS | COORDINADORA DE PROYECTOS",
          description:
            "Reemplazo temporal - Área de coordinación de proyectos de proyectos.",
          date: "MARZO 2022 - ABRIL 2022 BOGOTÁ, COL",
        },
      ];
      return { education, experience };
    },
  });
</script>
<style lang="scss" scoped>
  $h1-font-size: 54px;
  $p-font-size: 15px;
  $h3-font-size: 16px;
  $h2-font-size: 32px;
  $background-column-color: #fad1ce;
  $gray-color: #3c3c3b;
  $internal-gray-color: #7f7c7b;
  $h1-gray-color: #b0acab;
</style>
