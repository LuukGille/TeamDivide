<template>
	<div id="app">
		<navigation></navigation>
	</div>
</template>

<script>
import navigation from './components/navigation.vue'
export default {
	name: 'app',
	components: {
		navigation
	}
}
</script>

<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.application {
	font-family: monospace!important;
}

.application--wrap {
	flex-direction: row;
}
</style>
