<template>
  <div>
    <div>
      {{ Prueba1(1155667788) }}
    </div>
    <div>{{ prueba.findTriplet() }}{{ prueba }}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import prueba2 from "./Prueba2";
  import Service from "./Service";
  export default defineComponent({
    name: "Prueba1",
    setup() {
      const Prueba1 = (number: number) => {
        let stringNumber = number.toString().split("") as string[];
        if (stringNumber.length != 10) {
          console.log(new Error("El numero debe ser de 10 digitos"));
        } else {
          return replaceInNumber(stringNumber);
        }
      };
      const replaceInNumber = (string: string[]) => {
        var replacedString = string.map((element) => {
          if (Number(element) == 0) return "S";
          if (Number(element) == 1) return "U";
          if (Number(element) == 2) return "T";
          if (Number(element) == 3) return "P";
          if (Number(element) == 4) return "A";
          if (Number(element) == 5) return "G";
          if (Number(element) == 6) return "M";
          if (Number(element) == 7) return "E";
          if (Number(element) == 8) return "L";
          if (Number(element) == 9) return "C";
        });
        console.log(replacedString);

        return replacedString;
      };
      const prueba = new prueba2();
      const service = new Service();
      onMounted(() => {
        prueba.findTriplet();
        service.fetchData()
      });

      return {
        service,
        prueba,
        Prueba1,
      };
    },
  });
</script>
<style></style>
