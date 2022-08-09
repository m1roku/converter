<script setup>
	import CurrencyPair from './CurrencyPair.vue'

	defineProps({
		currencies: Object,
	});

</script>

<template>
	<ul class="currencies-list">
		<li
			class="currencies-list__item"
			v-for="currency in currencies">
			<currency-pair
				:currency="currency"
				:key="currency.ID" />
		</li>
	</ul>
</template>

