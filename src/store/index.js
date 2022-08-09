import { createStore } from 'vuex'
import { useSerializeData } from '../composables/useSerializeData';
import axios from 'axios';

export const store = createStore({
  state () {
    return {
      currencies: [],
      currenciesList: [],
      todayDate: ''
    }
  },
  mutations: {
    setCurrencies (state, currencies) {
      state.currencies = currencies
    },
    setDate (state, date) {
      state.todayDate = date
    },
    setCurrenciesList(state, currenciesList) {
      state.currenciesList = currenciesList
    }
  },
  actions: {
    async getCurrencies({commit}) {
      try {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        const { currencies, date, currenciesList } = useSerializeData(response.data)
        commit("setCurrencies", currencies)
        commit("setDate", date)
        commit("setCurrenciesList", currenciesList)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
