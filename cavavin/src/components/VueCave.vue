<template>
  <v-card> 
    <canvas id="ttt"
      :width="width"
      :height="height"
      ref="canvas"
      @click="doAction">
      </canvas>
  </v-card>
</template>
<script>
import Cave from "@/metier/Cave.js";
/**
 * Class Cave
 *
 * Gestion du canvas qui sera en charge de rendre l'affichage de la cave
 * cave : objet cave associé à ce composant
 * idCave : id de la caveprise en compte
 */
export default {
  component: {
    
  },
  /**
   * Initialisation des attributs
   */
  mounted() {
    this.$nextTick(function () {
    this.$emit('getCaveContent', this.id)
  })


    
    
  },


  /**
   *
   * Propriété fournies par le parent
   */
  data() {
    return {
      height:10,
      width:10,
      vueCanvas:null,
    };
  },

  props: {
    id: Number,
    object:Object
  },
  /**
   * Ameconnage
   */
  watch: {
    object:function() {
        console.log(this.object)
        //@TODO : adapter le width et le height à la taille de l'écran (un mode mobile et un mode + xx pixel de wi  dth..)
      var c = this.$refs.canvas;
      console.log(c)
      this.domElement = c;
      var ctx = c.getContext("2d");
      this.vueCanvas = ctx;
      /*this.hitCanvas = document.createElement("canvas");
      this.hitCanvas.width = this.width;
      this.hitCanvas.height = this.height;
      this.hitCanvas.style.opacity = 0.2;
      this.invisibleVueCanvas = this.hitCanvas.getContext("2d");
      this.invisibleVueCanvas.opacity = 0.2;
      */
      this.domElement.width=this.object.nbCols*this.object.sizeCase*2
      this.domElement.height=this.object.nbLignes*this.object.sizeCase*2
      //this.width=this.vueCanvas.width
      //this.height=this.vueCanvas.height
      console.log(this.width,this.height)

      this.redrawAll()
    },
    id:function(){
      this.$emit('getCaveContent', this.id)
    },
    width:function(){
      this.redrawAll()
    }
  },
  methods: {
    
    /**
     * Exécute l'action de l'outil selectionné au clic sur le canavs
     */
    doAction: function(event) { 
      // console.log(event)
      // console.log('------------------------------------------------------------------')
      /*var x =
        event.clientX -
        this.getOffset(this.domElement.left);
      var y =
        event.clientY -
        this.getOffset(this.domElement.top);*/
      //this.tool.doAction(this, x, y);
      this.redrawAll() //@TODO : il faut faire le redraw apres le mount, trouver mieux
    },
    /**
     * Efface les deux canvas pour redessiner l'ensemble.
     */
    redrawAll() {
      var ctx = this.vueCanvas;
      //var hctx = this.invisibleVueCanvas;
      
      //this.vueCanvas.clearRect(0, 0, this.width, this.height);
      //this.invisibleVueCanvas.clearRect(0, 0, this.width, this.height);
      console.log("redraw")
      this.object.draw(ctx)//Les cercles ne se dessinent pas... un  problème CSS sans doute, revoir la configuration....
      

    }
  }
};
</script>
<style>
</style>
