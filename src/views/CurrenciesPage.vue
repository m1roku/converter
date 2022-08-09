<script setup>
	import CurrenciesList from '../components/CurrenciesList.vue';
	import SearchBar from '../components/SearchBar.vue';
	import { useSearch } from '../composables/useSearch';
	import { useStore } from 'vuex'
	import { onMounted, computed } from 'vue';

	const store = useStore()
	const currencies = computed(() => store.state.currencies)
	const date = computed(() => store.state.todayDate)

	onMounted(() => {
		if (!currencies.value.length) {
			store.dispatch('getCurrencies')
		}
	})

	const { search, searchedCurrencies } = useSearch(currencies)
	const onSearch = (value) => {
		search.value = value
	}

</script>

<template>

	<div class="container">
		<h1>Курс валют на {{ date }}</h1>
		<search-bar @search="onSearch" />
	</div>
	<currencies-list v-if="currencies" :currencies="searchedCurrencies" />
</template>
