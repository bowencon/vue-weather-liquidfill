import Vue from 'vue'
import App from './App.vue'

//import weatherLiquidfill from '../packages/index'
import weatherLiquidfill from '../lib/weatherLiquidfill.umd.js'

Vue.use(weatherLiquidfill)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')