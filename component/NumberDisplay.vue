<template>
    <div>
        <h2>{{ storeState.numbers }}</h2>
    </div>
</template>

<script>

import { store } from '../src/store'
// import EventBus from '../src/event-bus.js';

export default {
    name: "NumberDisplay",
    data() {
        return {
            storeState: store.state
            // numbers: [1, 2, 3, 4]
        };
    },
    created() {
        EventBus.$on('number-added', number => {
            this.numbers.push(number);
        });
    }
};
</script>

