// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueCave from '@/components/VueCave' // path to vuetify export
import VuePrincipale from '@/components/VuePrincipale' // path to vuetify export

Vue.config.productionTip = false
Vue.component('VueCave', VueCave)
Vue.component('VuePrincipale', VuePrincipale)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
