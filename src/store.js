import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    
})

// {
//     state: {
//         numbers: [1, 2, 3, 4, 5]
//     }, 
//     addNumber(newNumber) {
//         this.state.number.push(newNumber);
//     },
//     removeLastNumber() {
//         this.state.number.pop()
//     },
//     reverseNumbers() {
//         this.state.number.reverse()
//     }
// };

// console.log(!!0, true == 1, true === 1);

// The Vuex Store is made complete with 4 objects - State, Mutations,
// Actions, and Getters.

// State is simply an object that contains the data that needs to be shared within the application. We'll create a state object that only has a numbers array.

// STATE
const state = {
    numbers: [1, 2, 3, 4, 5, 6, 7]
};

// Mutations are functions responsible in directly mutating store state. In
// Vuex, mutations always have access to the store state as the first
// argument. In addition, actions may or may not pass in a payload as the
// second argument. We'll create an ADD_NUMBER mutation that expects a
// payload and pushes that payload to the state.numbers array.

// MUTATIONS
const mutations = {
    ADD_NUMBER(state, payload) {
        state.numbers.push(payload);
    }
};

// Actions exist to call mutations. Actions are also responsible for performing
// any or all asynchronous calls prior to committing to mutations. Actions
// have access to a context object that provides access to store state (with
// context.state ), to store getters (with context.getters ), and to the
// commit function (with context.commit ).
// Here’s an addNumber() action that simply directly commits to theADD_NUMBER mutation while passing in the expected payload:

// ACTIONS
const actions = {
    addNumber(context, number){
        context.commit("ADD_NUMBER", number);
    }
};

// Getters are to a Vuex store what computed properties are to a Vue
// component. Getters are primarily used to perform some
// calculation/manipulation to store state before having that information
// accessible to components.
// Like mutations, getters have access to state as the first argument. Here’s a
// getter called getNumbers that simply returns the state.numbers array:

// GETTERS
const getters = {
    getNumbers(state) {
        return state.numbers;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});