<template>
    <div>
        <h2>{{ numbers }}</h2>
        <input type="number" v-model="number" />
        <button @click="$emit('number-added', Number(number))">Add New Number</button>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        numbers: Array
    }
};
</script>

