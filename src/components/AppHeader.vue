<script setup>
	import MainMenu from './MainMenu.vue'
	import { onMounted, ref } from 'vue';

	const scrollY = ref(0)

	onMounted(() => {
		document.addEventListener('scroll', () => {
			scrollY.value = window.scrollY
		})
	})

</script>

<template>
	<header
		class="header"
		:class="{ 'header--sticky' : scrollY > 30 }"
	>
		<div class="container header__container">
			<div class="logo header__logo">
				<img src="src/assets/images/vue-logo.png" alt="" class="logo__image">
				<p class="logo__text">Currencies</p>
			</div>
			<main-menu />
		</div>
	</header>
</template>
