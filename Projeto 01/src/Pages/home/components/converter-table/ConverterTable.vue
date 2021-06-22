<template>
    <div class="ConverterTableContainer">
        <div class="ConverterTableContainer--title">
            <h3>Tabela de conversões</h3>
        </div>
        
        <div class="ConverterTable--content">
            <div class="column">
                <div class="row" v-for="(unit,key) in units" v-bind:key="key">
                    <span>{{unit}}px</span>
                        <img src="/icons/arrow-right.svg">
                    <span>{{px2rem(getFontSize,unit)}}rem</span>
                </div>
            </div>
            <div class="column">
                <div class="row" v-for="(unit,key) in units" v-bind:key="key">
                    <span>{{unit}}rem</span>
                        <img src="/icons/arrow-right.svg">
                    <span>{{ rem2px(getFontSize,unit) }}px</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useConversor from '../../../../hooks/useConversor'

export default {
    setup() {
    const { getFontSize, px2rem, rem2px } = useConversor();
    return {
        getFontSize,
        px2rem,
        rem2px
    }
    },
    computed: {
        units() {
            let units = new Array();
            for(let i = 0; i < 16; i++) {
                units[i] = i * 2 || 1
            }
            return units;
        }
    },
}

</script>

<style scoped>
@import './ConverterTable.styles.css';
</style>