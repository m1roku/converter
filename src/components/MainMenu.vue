<template>
	<nav class="main-menu">
		<ul class="main-menu__list">
			<li class="main-menu__item">
				<router-link :to="{name: 'Index'}" class="main-menu__link" active-class="main-menu__link--active">Список валют</router-link>
			</li>
			<li class="main-menu__item">
				<router-link :to="{name: 'Converter'}" class="main-menu__link" active-class="main-menu__link--active">Конвертер валют</router-link>
			</li>
		</ul>
	</nav>
</template>
