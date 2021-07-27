<template>
  <v-app id="inspire">
    <VueCave :cave="cave1"/>
  </v-app>
</template>

<script>
import Cave from "@/metier/Cave.js";
  export default {
    data() {
    return {
      cave1:new Cave(10,5,15),
    };
  },
  mounted() {
    
  }
  }
</script>