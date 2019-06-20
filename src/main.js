import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ParentComponent from '../component/ParentComponent';
import ChildComponent from '../component/ChildComponent';
import NumberSubmit from '../component/NumberSubmit';
import NumberDisplay from '../component/NumberDisplay';

Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  store,
  render: h => h(App)
}).$mount('#app')

