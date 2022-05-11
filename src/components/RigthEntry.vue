<template>
  <div class="entry-container">
    <div class="entry-title">
      <h3>
        {{ labels.title.toUpperCase() }}
      </h3>
      <div v-if="labels?.date">
        <span>
          {{ labels.date }}
        </span>
      </div>
    </div>
    <p>
      {{ labels.description }}
    </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "RigthEntry",
    props: {
      entryInfo: {
        type: Object,
        default: {
          title: "Titulo",
          description: "Description",
        },
      },
    },
    setup(props) {
      const labels = ref(props.entryInfo);
      return { labels };
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
  .entry-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px 5px;
    .entry-title {
      width: 100%;
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }
    h3 {
      margin: 0px;
      width: 60%;
      font-size: $h3-font-size;
      color: $gray-color;
      text-align: left;
    }
    p {
      text-align: left;
      font-size: $p-font-size;
      color: $internal-gray-color;
    }
    span {
      width: 20%;
      text-align: left;
      font-size: $p-font-size;
    }
  }
</style>
