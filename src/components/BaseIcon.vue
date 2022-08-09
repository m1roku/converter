<script setup>
	import { defineAsyncComponent, computed } from 'vue';

	const props = defineProps({
		name: String
	})

	const dynamicComponent = computed(() => {
		const name = props.name;
		return defineAsyncComponent(() => import(`./icons/${name}.vue`));
	})


</script>

<template>
	<component :is="dynamicComponent" />
</template>

<style>
	svg {
		vertical-align: middle;
		fill: currentColor;
		stroke: currentColor;
	}
</style>

