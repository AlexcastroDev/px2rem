import { ref, computed } from "vue";

const htmlFontSize = ref(16)

export default function (value) {
    const px2rem = (fontSize, value) => value / fontSize
    const rem2px = (fontSize, value) => fontSize * value
    const getFontSize = computed(() => htmlFontSize.value)

    function setFontSize(value) {
      htmlFontSize.value = Number(value)
    }

  return {
    getFontSize,
    px2rem,
    rem2px,
    setFontSize
  }
}
