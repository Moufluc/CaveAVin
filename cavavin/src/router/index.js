import Vue from 'vue'
import Router from 'vue-router'
import VueCave from '@/components/VueCave'
import VuePrincipale from '@/components/VuePrincipale'
import Vin from '@/components/Vin'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: VuePrincipale,
      children: [
        {
          // `UserProfile` va être rendu à l'intérieur du `<router-view>` de `User`
          // quand `/utilisateur/:id/profil` concorde
          path: 'cave/:id',
          component: VueCave
        },
        {
          // `UserPosts` va être rendu à l'intérieur du `<router-view>` de `User`
          // quand `/utilisateur/:id/billets` concorde
          path: 'vin/:id',
          component:Vin
        }
      ]
    }
  ]
})