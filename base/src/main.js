import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {registerMicroApps,start} from 'qiankun'
const apps = [
  {
    name:'admin',
    entry:'//localhost:8081/',
    container:'#admin',
    activeRule:'/admin'
  },
  {
    name:'factory',
    entry:'//localhost:8082/',
    container:'#factory',
    activeRule:'/factory'
  },
  {
    name:'frontend',
    entry:'//localhost:8083/',
    container:'#frontend',
    activeRule:'/frontend'
  }
]
registerMicroApps(apps);
start();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
