<template>
  <div class="HomeContainer">
    <div class="column">
      <InputBox :label="units.primary.label" v-model="units.primary.value" @change="_handleInputBoxChange" />
      <div class="HomeContainer--changeUnit">
        <img src="/icons/change.svg" @click="_handleChangeUnit">
      </div>
      <InputBox :label="units.secondary.label" v-model="units.secondary.value" @change="_handleSecondInputBoxChange" />
    </div>
    <div class="column">
      <FontSizeEditor />
      <ConverterTable />
    </div>  
  </div>
  
</template>

<script>
import InputBox from '../../components/input-box/InputBox.vue'
import ConverterTable from './components/converter-table/ConverterTable.vue'
import FontSizeEditor from './components/fontsize-editor/FontSizeEditor.vue'
import useConversor from '../../hooks/useConversor'

export default {
  components: {
    InputBox,
    ConverterTable,
    FontSizeEditor
  },
   setup() {
    const { getFontSize, px2rem, rem2px } = useConversor();
    return {
      getFontSize,
      px2rem,
      rem2px
    }
  },
  computed: {
    availableUnits() {
      return [
        {
          label: 'Pixels',
          getValue: this.rem2px
        },
        {
          label: 'Rem',
          getValue: this.px2rem
        },
      ]
    }
  },
  data: () => ({
    units: {
      primary: {
        label: "Pixels",
        value: 16,
      },
      secondary: {
        label: 'Rem',
        value: 1,
      },
      pixels: null,
      rem: null,
      em: null,
    },
  }),
  methods: {
    _handleInputBoxChange({target}) {
      this.units.primary.value = Number(target.value)

      const { getValue } = this.availableUnits.find(unit => unit.label === this.units.secondary.label)
      this.units.secondary.value = getValue(this.getFontSize, this.units.primary.value)
    },
    _handleSecondInputBoxChange({target}) {
      this.units.secondary.value = Number(target.value)
      
      const { getValue } = this.availableUnits.find(unit => unit.label === this.units.primary.label)
      this.units.primary.value = getValue(this.getFontSize, this.units.secondary.value)
    },
    _handleChangeUnit() {
      const { primary, secondary } = this.units
      this.units = { 
        ...this.units,
        primary: secondary,
        secondary: primary,
       }
    }
  },
  watch: {
    getFontSize() {
      this._handleSecondInputBoxChange({ target: {value: this.units.secondary.value} })
      this._handleInputBoxChange({ target: {value: this.units.primary.value} })
    }
  }
}

</script>

<style>
@import './Home.styles.css';
</style>