<template>
  <div class="rigth-container">
    <div class="profile-content">
      <RigthEntry :entry-info="profile" />
    </div>
    <div class="experience-content">
      <RigthEntry
        v-for="item in experience"
        :key="item.title"
        :entryInfo="item"
      ></RigthEntry>
    </div>
    <div class="education-content">
      <RigthEntry
        v-for="item in education"
        :key="item.title"
        :entryInfo="item"
      ></RigthEntry>
    </div>
    <div class="skills-content">
      <StarsShowcase :skills="skills"></StarsShowcase>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import RigthEntry from "./RigthEntry.vue";
  import StarsShowcase from "./StarsShowcase.vue";

  export default defineComponent({
    name: "RigthColumn",
    components: { RigthEntry, StarsShowcase },
    setup() {
      const profile = {
        title: "Perfil",
        description:
          "Arquitecta con preferencia por el diseño de espacios y construcción, con dominio de software como Autocad, Revit, Illustrator, Sketchup, Photoshop, Rhino y Excel; con experiencia formativa en supervisión y coordinación de personal, seguimiento de actividades operativas, control de inventarios, cierres y apertura de bodega, asesoría y servicio al cliente, elaboración de informes de gestión, reporte de novedades, con gran capacidad analítica, adaptabilidad a todo tipo de ambiente de trabajo, liderazgo y determinación en cualquier circunstancia; con un amplio sentido del respeto por la dignidad humana, el desarrollo social y el cuidado del medio ambiente.",
        date: null,
      };
      const experience = [
        {
          title:
            "> DISEÑOS E INSTALACIONES DE COLOMBIA S.A.S | AUXILIAR EN GESTION DE PROYECTOS",
          description:
            "Planificar y orientar los procesos del proyecto de principio a fin. Los procesos se guían por cinco etapas: iniciación, planificación, ejecución, control y cierre",
          date: "ABRIL 2016 - OCTUBRE 2020 BOGOTÁ, COL",
        },
        {
          title: "> GRUPO C&G COLOMBIA SAS | COMERCIAL",
          description: "Practicas profesionales | Área comercial y técnica.",
          date: "FEBRERO 2021 - AGOSTO 2021 BOGOTÁ, COL",
        },
        {
          title: "> FABRICA DE CASETONES JAR SAS | COORDINADORA DE PROYECTOS",
          description:
            "Reemplazo temporal - Área de coordinación de proyectos de proyectos.",
          date: "MARZO 2022 - ABRIL 2022 BOGOTÁ, COL",
        },
      ];
      const education = [
        {
          title: "> UNIVERSIDAD PILOTO DE COLOMBIA",
          description:
            "Pregado en Arquitectura en la facultdad de Arquitectura y Artes.",
          date: "FEBRERO 2015 - AGOSTO 2021",
        },
        {
          title:
            "> XI SEMINARIO INTERNACIONAL DE LA FACULTAD DE ARQUITECTURA Y ARTES ",
          description:
            "The digital Reveal: Arquitectura de la era Post-Digital Intensidad de 13 horas",
          date: "OCTUBRE 2016 BOGOTÁ, COL.",
        },
        {
          title: "> ENGLISH SCHOOL OF CANADA",
          description:
            "Estudio del idioma inglés en la ciudad de Toronto por dos meses",
          date: "JUNIO 2017 TORONTO, CAN",
        },
        {
          title:
            "> XII SEMINARIO INTERNACIONAL DE LA FACULTAD DE ARQUITECTURA Y ARTES",
          description:
            "Eficiencia + Experiencia: Hacia una Arquietctura del Confort Intensidad de 13 horas",
          date: "OCTUBRE 2018 BOGOTÁ, COL",
        },
        {
          title:
            "> XIII SEMINARIO INTERNACIONAL DE LA FACULTAD DE ARQUITECTURA Y ARTES",
          description:
            "El entorno domestico como hábitat total Intensidad de 16 horas",
          date: "NOVIEMBRE 2020 BOGOTÁ, COL.",
        },
      ];
      const skills = {
        autocad: 5,
        revit: 5,
        rino: 2,
        sketchup: 2,
        illustrator: 4,
        photoshop: 3,
        lumion: 1,
        excel: 1,
      };
      return { profile, experience, education, skills };
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

  .rigth-container {
    display: flex;
    flex-direction: column;
  }
</style>
