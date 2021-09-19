<template>
<v-card>
  Vue principale
  
<router-view :object=routerObject :id=parseInt($route.params.id) @getCaveContent=getCaveContent @getWineDetail=getWineDetail ></router-view>
<!-- peut afficher une cave ou du vin ou n'importe quoi d'autre.....
trouver un moyen d'envoyer un objet a chaque fois...-->
</v-card>
</template>
<script>
import Cave from "@/metier/Cave.js";
import Vin from "@/metier/vin.js";
/**
 * Classe de base a qui appartient les données
 */
export default {
  component: {
    
  },
  /**
   * Initialisation des attributs
   */
  mounted() {
    this.lstCaves.push(new Cave(10,15,10))
    this.lstCaves.push(new Cave(20,25,10))
    //localStorage.setItem('storedData', this.input)
    //app.input = localStorage.getItem('storedData');
  },
  /**
   *
   * Propriété fournies par le parent
   */
  
  data() {
    return {
      lstCaves:new Array(),
      lstVins:new Array(),
      routerObject:null
      
      

    };
  },

  props: {
    
  },
  /**
   * Ameconnage
   */
  watch: {
  },
  methods: {
    getCaveContent : function(id){
      console.log(this.lstCaves)
      console.log(this.lstCaves[id])
      this.routerObject=this.lstCaves[id]
      console.log(this.routerObject)
    },
    getWineDetail : function(id){
      
    }
    
  }
};
</script>
<style>
</style>
