import {computed, ref} from 'vue';

export function useConverter () {

  const leftCurrency = ref('1')
  const rightCurrency = ref('1')
  const leftValue = ref('')
  const rightValue = computed(() => {
    const ratio = leftCurrency.value / rightCurrency.value
    return leftCurrency.value === '1' ? '' : leftValue.value * ratio
  })

  const inverseConverter = () => {
    const tempCurrency = {
      left: leftCurrency.value,
      right: rightCurrency.value
    }

    leftCurrency.value = tempCurrency.right
    rightCurrency.value = tempCurrency.left
  }

  return { leftCurrency, rightCurrency, leftValue, rightValue, inverseConverter }
}
