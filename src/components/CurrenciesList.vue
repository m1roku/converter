<script setup>
	import CurrencyPair from './CurrencyPair.vue'
	import { toRefs } from 'vue';

	const props = defineProps({
		currencies: Object,
	});

	const { currencies: currenciesList } = toRefs(props)

</script>

<template>
	<ul class="currencies-list">
		<li
			class="currencies-list__item"
			v-for="currency in currenciesList">
			<currency-pair
				:currency="currency"
				:key="currency.ID" />
		</li>
	</ul>
</template>

