import Vue from 'vue'
// import App from './App.vue'
import ParentComponent from '../component/ParentComponent'
import ChildComponent from '../component/ChildComponent'

new Vue({
  el: 'ParentComponent',
  render: h => h(ParentComponent)
})
