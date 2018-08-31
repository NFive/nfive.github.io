<template>
	<main class="w-100 h-100 m-0">
		<h1>Blah!</h1>
		<button @click="$emit('setView', 'Home')">Switch to home</button>
	</main>
</template>

<script>
export default {
	name: 'Blank'
}
</script>

<style scoped>

main {
	position: absolute;
}

</style>
