//classe Cave qui représente une cave
export default class Cave{
  /**
   * Représentation d'un noeu du graphe ; d'une porte
    * @param {Map(rgb,Bouteille)} lstBouteilles
    * @param {int} nbLignes
    * @param {int} nbCols
    * @param {int} sizeCase 
    */
    constructor(nbLignes, nbCols, sizeCase){
        this.nbLignes = nbLignes
        this.nbCols = nbCols
        this.sizeCase = sizeCase
    }
    /**
     * Dessine la porte sous la forme d'in cercle dans un canvas.
     * Et attribut l'id
     * @param {*} canvas 
     * @param {*} color 
     */
  draw(ctx){
    for(var i=0;i<this.nbLignes;i++){
        for(var j=0;j<this.nbCols;j++){
          ctx.beginPath();
          const x =(j)*this.sizeCase*2+this.sizeCase
          const y=(i)*this.sizeCase*2+this.sizeCase
          ctx.strokeStyle = '#ffffff';
          ctx.fillStyle="blue"
          ctx.arc( x, y, this.sizeCase,0,2*Math.PI)
          ctx.fill()
          ctx.stroke()
          console.log(this.sizeCase,ctx.strokeStyle)
        }
    }
  }

}
