<script setup>

	defineProps({
		currency: {
			type: Object,
			required: true
		}
	})

</script>

<template>
	<div class="currency-item">
		<div class="currency-item__block">
			<div class="currency-item__block-top">
						<span class="currency-item__nominal">
							{{  currency.value }}
						</span>
				<span class="currency-item__code">
							{{ currency.code }}
						</span>
			</div>
			<span class="currency-item__name">
						{{ currency.name }}
					</span>
		</div>
	</div>
</template>
