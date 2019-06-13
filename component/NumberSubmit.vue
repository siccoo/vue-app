<template>
    <div>
        <input type="number" v-model="number" />
        <button @click="addNumber">Add New Number</button>
    </div>
</template>

<script>

import { EventBus } from '../src/event-bus.js';

export default {
    name: "NumberSumbit",
    data() {
        return {
            number: 0
        };
    },
    methods: {
        addNumber() {
            EventBus.$emit("number-added", Number(this.number));
        }
    }
};
</script>

