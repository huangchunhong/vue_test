// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 
import  { ToastPlugin } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'

Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
// 该组件支持以plugin形式调用：
Vue.use(ToastPlugin)
// 默认参数
Vue.use(ToastPlugin, {position: 'top'})


// import Vue from 'vue'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
