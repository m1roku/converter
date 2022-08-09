<script setup>
	const props = defineProps({
		modelValue: [String, Number]
	})

	const emit = defineEmits(['update:modelValue'])

	const updateInput = (event) => {
		emit('update:modelValue', event.target.value)
	}
</script>

<template>
	<input
		:value="modelValue"
		@input="updateInput"
		class="input"
		type="text"
		v-bind="$attrs"
	>
</template>
