<script setup>
	import BaseSelect from '../components/BaseSelect.vue'
	import BaseInput from '../components/BaseInput.vue'
	import BaseIcon from '../components/BaseIcon.vue'
	import {computed, onMounted} from 'vue';
	import {useStore} from 'vuex';
	import {useConverter} from '../composables/useConverter';
	const store = useStore()
	const currencies = computed(() => store.state.currenciesList)

	onMounted(() => {
		if (!currencies.value.length) {
			store.dispatch('getCurrencies')
		}
	})

	const { leftCurrency, rightCurrency, leftValue, rightValue, inverseConverter } = useConverter()

</script>

<template>
	<div class="container">
		<h1>Конвертер валют</h1>

		<div class="converter">
			<div class="converter__block converter__currencies">
				<base-select class="converter__select" :options="currencies" v-model="leftCurrency" />
				<base-select class="converter__select" :options="currencies" v-model="rightCurrency" />
			</div>
			<div class="converter__controls">
				<button
					type="button"
					class="button"
					@click="inverseConverter"
				>
					<base-icon name="TransferArrows" />
				</button>
			</div>
			<div class="converter__block converter__inputs">
				<base-input class="converter__input" v-model="leftValue" placeholder="0.00" />
				<base-input class="converter__input" v-model="rightValue" placeholder="0.00" disabled />
			</div>
		</div>
	</div>
</template>
