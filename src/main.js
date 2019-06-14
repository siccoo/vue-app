import Vue from 'vue';
// import App from './App.vue';
import ParentComponent from '../component/ParentComponent';
import ChildComponent from '../component/ChildComponent';
import NumberSubmit from '../component/NumberSubmit';
import NumberDisplay from '../component/NumberDisplay';

new Vue({
  el: '#app',
  render: h => h(NumberDisplay)
})

