<script setup>
	const props = defineProps({
		options: {
			type: Array,
			required: true
		},
		modelValue: {
			type: String
		}
	})

	const emit = defineEmits(['update:modelValue'])

	const updateSelect = (event) => {
		emit('update:modelValue', event.target.value)
	}
</script>

<template>

	<select class="select" v-bind="$attrs" v-model="modelValue" @change="updateSelect">
		<option disabled value="1" selected="selected">Выберите валюту</option>
		<option
			v-for="option in options"
			:value="option.value"
			:key="option.value"

		>
			{{ option.name }}
		</option>
	</select>
</template>
