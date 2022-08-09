<script setup>
	import BaseInput from './BaseInput.vue'
	import {computed, toRefs} from 'vue';

	const props = defineProps({
		search: [String, Number]
	})

	const { search } = toRefs(props)

	const emit = defineEmits(['search'])

	const searchQuery = computed({
		get() {
			return search.value
		},
		set(value) {
			emit('search', value)
		}
	})

</script>

<template>
	<div class="search-bar">
		<base-input v-model="searchQuery" placeholder="Поиск"/>
	</div>
</template>
