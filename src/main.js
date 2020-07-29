import Vue from 'vue'
import App from './App.vue'

//设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.default.baseURL = 'http://localhost:8443/api'
//全局注册，之后可以在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//将VUE 组件追加渲染到index.html页面上的 <div id="app"></div> 位置
new Vue({
  render: h => h(App),
}).$mount('#app')
