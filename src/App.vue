<script setup>
	import AppHeader from './components/AppHeader.vue'
</script>

<template>
	<app-header></app-header>
	<main class="main">
    <router-view></router-view>
	</main>
</template>

<style lang="scss">
@import "assets/styles/style";
</style>
