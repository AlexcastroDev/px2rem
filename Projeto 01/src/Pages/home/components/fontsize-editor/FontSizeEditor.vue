<template>
    <span>Cálculo baseado no font-size do CSS de 
        <div v-if="isEditable"><input @blur="setEditable" :value="getFontSize" @change="_handleChangeFontSize" /></div>
        <button @click="setEditable">
            <template v-if="!isEditable">{{getFontSize}}</template> <img src="/icons/pencil.svg"  /> 
        </button>
        <strong>pixels</strong>
    </span>
</template>

<script>

import useConversor from '../../../../hooks/useConversor'
export default {
    data: () => ({
        isEditable: false,
    }),
    setup() {
        const { getFontSize, px2rem, rem2px, setFontSize } = useConversor();
        return {
            px2rem,
            rem2px,
            setFontSize,
            getFontSize
        }
    },
    methods: {
        setEditable(){
            this.isEditable = !this.isEditable
        },
        _handleChangeFontSize({target}) {
            this.setFontSize(target.value || 16)
        }
    }
}
</script>

<style scoped>
@import '/src/styles/variables.css';

span {
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 0.15em;
    color: var(--black);
}

span button,
span input {
    max-width: 3rem;
    margin-left:1rem;
}

strong {
    margin-left:1rem;
}
</style>