<script setup>
	import {ref, computed, toRefs} from 'vue';
	import BaseIcon from './BaseIcon.vue'
	import CurrencyItem from './CurrencyItem.vue'

	const props = defineProps({
		currency: Object,
	});

	const { currency } = toRefs(props)

	const isCurrencyPairInverse = ref(false)

	const foreignCurrencyValue = computed(() => {
		return isCurrencyPairInverse.value  ? `${(1 / (currency.value.Value / currency.value.Nominal)).toFixed(4)}` : currency.value.Nominal
	})

	const rubleValue = computed(() => {
		return isCurrencyPairInverse.value ? '1' : currency.value.Value
	})

	const currencyHistoryClass = computed(() => {
		if (isCurrencyPairInverse.value) {
			return currency.value.Value < currency.value.Previous ? 'currency-pair__history--increase' : 'currency-pair__history--decrease'
		}
		return currency.value.Value > currency.value.Previous ? 'currency-pair__history--increase' : 'currency-pair__history--decrease'
	})


</script>

<template>
		<div class="currency-pair" :class="{'currency-pair--reverse' : isCurrencyPairInverse}">
			<div class="currency-pair__layout container">
				<div class="currency-pair__foreign">
					<currency-item
						:currency="{
							name: currency.Name,
							code: currency.CharCode,
							value: foreignCurrencyValue
						}"
					/>
				</div>
				<div class="currency-pair__ruble">
					<currency-item
						:currency="{
						name: 'Российский рубль',
						code: 'RUB',
						value: rubleValue
					}"
					/>
				</div>
				<div
					class="currency-pair__history"
					:class="currencyHistoryClass"
				>
					<base-icon name="ArrowUp" />
				</div>

				<div class="currency-pair__toggle">
					<button
						type="button"
						class="button"
						@click="isCurrencyPairInverse = !isCurrencyPairInverse"
					>
						<base-icon name="TransferArrows" />
					</button>
				</div>
			</div>
		</div>

</template>

