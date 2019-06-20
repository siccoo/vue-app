// npm install vue-router --save
import Vue from 'vue';
import VueRouter from 'vue-router';
import CharizardCard from '../component/CharizardCard';
import BlastoiseCard from '../component/BlastoiseCard';
import VenusaurCard from '../component/VenusaurCard';
import NotFound from '../component/NotFound';

Vue.use(VueRouter);

const routes = [
        { path: '/', component: CharizardCard },
        { path: '/charizard', component: CharizardCard},
        { path: '/blastoise', component: BlastoiseCard},
        { path: '/venusaur', component: VenusaurCard},
        { path: '*', component: NotFound}
];