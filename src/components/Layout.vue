<template>
	<main class="w-100 h-100 m-0">
		<h1>Home!</h1>
		<button @click="$emit('setView', 'Blank')">Switch to blank</button>
	</main>
</template>

<script>

export default {
	name: 'Layout',
	methods: {

	}
}
</script>

<style scoped>

</style>
