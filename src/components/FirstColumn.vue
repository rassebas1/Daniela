<template>
  <div class="first-column">
    <h1>DANIELA <br /><span>RODRIGUEZ</span></h1>
    <div class="column-description">
      <h2>ARQUITECTA</h2>
      <p>
        Egresada de la Univarsidad Piloto de Colombia, me considero una persona
        asertiva, creativa y comprometida, me gusta el dibujo y el diseño de
        espacios funcionales. Me especializo en el campo del diseño digital, soy
        responsable, honesta, perceptiva y paciente, buena líder y se me
        facilita el trabajo en equipo, soy buena comunicándome y entendiendo los
        problemas y contratiempos de los que me rodean.
      </p>
      <div class="column-description-background">
        <div class="contact-info">
          <h3>CONTACT</h3>

          <div
            class="contact-item"
            v-for="(item, index) in contact"
            v-bind:key="`index ${index}`"
          >
            <vue-feather :type="item.icon"></vue-feather>
            <p>{{ item.text }}</p>
          </div>

          <div
            class="social-item"
            v-for="(item, index) in socialNetwork"
            v-bind:key="index"
          >
            <vue-feather :type="item.icon"></vue-feather>
            <a target="new" :href="item.text">{{ item.name }}</a>
          </div>
          <h3>LANGUAGES</h3>
          <div
            class="languages-item"
            v-for="(item, index) in languages"
            v-bind:key="index"
          >
            <p>{{ index.toLocaleUpperCase() }}:</p>
            <StarRating
              :rating="item"
              :star-size="20"
              inactive-color="#7f7c7b"
              active-color="#3c3c3b"
              :read-only="true"
              :increment="0.01"
            ></StarRating>
          </div>
          <h3>INTERESTS</h3>
          <div class="interest-wrapper">
            <div
              class="interest-item"
              v-for="(item, index) in interest"
              v-bind:key="index"
            >
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  // @ts-ignore
  import StarRating from "vue-star-rating";

  export default defineComponent({
    name: "FirstColumn",
    components: { StarRating },
    setup() {
      const contact = [
        {
          text: "Calle 25 #35-39 Corferias Teusaquillo Bogotá, Colombia",
          icon: "map-pin",
        },
        {
          text: "+57 311 268 74 19",
          icon: "phone",
        },
        {
          text: "daparoza@hotmail.com",
          icon: "mail",
        },
      ];

      const socialNetwork = [
        {
          text: "https://www.behance.net/danielarodrigu",
          icon: "globe",
          name: "Behance",
        },
        {
          text: "https://www.linkedin.com/in/daniela-patricia-rodriguez-zapata/",
          icon: "linkedin",
          name: "LinkedIn",
        },
      ];
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
  $h1-font-size: 54px;
  $p-font-size: 15px;
  $h3-font-size: 16px;
  $h2-font-size: 32px;
  $background-column-color: #fad1ce;
  $gray-color: #3c3c3b;
  $internal-gray-color: #7f7c7b;
  $h1-gray-color: #b0acab;
  .first-column {
    box-sizing: border-box;
    min-width: 340px;
    width: 30%;
    height: 100%;
    color: $gray-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 0px 10px;

    > h1 {
      font-size: $h1-font-size;
      font-family: "Source Sans Pro", sans-serif;

      font-weight: 400;
      font-family: "Source Sans Pro", sans-serif;
      line-height: 59px;
      letter-spacing: 7px;
      span {
        color: $h1-gray-color;
        font-weight: 800;
      }
    }
    .column-description {
      background-color: $background-column-color;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
      .column-description-background {
        padding: 10px;
        display: flex;
      }
      h2 {
        font-size: $h2-font-size;
        font-family: "Sawarabi Mincho", serif;
        margin-top: 4px;
        letter-spacing: 5px;
        font-weight: 100;
      }
      p {
        width: 90%;
        font-size: $p-font-size;
        font-family: "Lato", sans-serif;
        text-align: justify;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h3 {
        font-size: $h3-font-size;
        font-family: "Open Sans", sans-serif;
        width: 200px;
        height: 40px;
        font-weight: 100;
        background-color: $gray-color;
        color: white;
        border: 1px solid $gray-color;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > .contact-item,
      > .social-item {
        // width: 100%;
        height: 35px;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-top: 4px;
        margin-bottom: 4px;
        p {
          font-size: $p-font-size;
          font-family: "Lato", sans-serif;
          text-align: center;
          margin-left: 4px;
          margin-top: 0px;
          margin-bottom: 0px;
        }
        a {
          font-size: $p-font-size;
          font-family: "Lato", sans-serif;
          margin-left: 34px;
          text-align: left;
          text-decoration: none;
        }
      }
      img {
        width: 35px;
        height: 35px;
      }
      .languages-item {
        display: flex;
        // width: 100%;
        height: 25px;
        align-items: center;
        p {
          font-size: $p-font-size;
          width: 45%;
          font-family: "Lato", sans-serif;
          text-align: center;
          margin-left: 4px;
          margin-top: 0px;
          margin-bottom: 0px;
        }
      }
      .interest-wrapper {
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .interest-item {
          display: flex;
          justify-content: center;
          // width: calc((100% - 20px) / 2);
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .first-column {
      width: 100%;
      margin: 0px;
      padding: 4px;
    }
  }
</style>
