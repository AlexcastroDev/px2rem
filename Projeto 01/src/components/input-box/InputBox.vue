<template>
    <fieldset>
        <span> {{ label }} </span>
        <input type="number" v-model="modelValue" min="0"/>
    </fieldset>
</template>

<script>
export default {
    props: {
        label: {
            required: true,
            type: String
        },
        modelValue: {
            type: Number
        }
    },
}
</script>

<style scoped>
@import './InputBox.styles.css';
</style>