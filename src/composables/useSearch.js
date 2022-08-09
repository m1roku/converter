import {ref, computed} from 'vue'
export function useSearch (currencies) {

  const search = ref('')

  const searchedCurrencies = computed(() => {

    return currencies.value.filter(curr => {

      if (curr.Name.toLowerCase().includes(search.value.toLowerCase())) {
        return curr
      }

      if (curr.CharCode.toLowerCase().includes(search.value.toLowerCase())) {
        return curr
      }

    })

  })

  return { search, searchedCurrencies }
}
