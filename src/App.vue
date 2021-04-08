<template>
  <v-app>
    <v-main>
      <Calender />
    </v-main>
  </v-app>
</template>

<script>
import Calender from "./components/Calender.vue";

export default {
  name: "App",

  components: {
    Calender,
  },

  data: () => ({
    //
  }),
};
</script>
