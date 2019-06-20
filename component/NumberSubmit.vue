<template>
    <div>
        <input type="number" v-model="number" />
        <button @click="addNumber">Add New Number</button>
    </div>
</template>

<script>
// import { store } from '../src/store'
// import { EventBus } from '../src/event-bus.js';

export default {
    name: "NumberSumbit",
    data() {
        return {
            numberInput: 0
        };
    },
    methods: {
        addNumber(numberInput) {
            this.$store.dispatch("addNumber", Number(numberInput));
        }
    }
};
</script>

