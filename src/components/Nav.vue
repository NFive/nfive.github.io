<template>
	<main class="w-100 h-100 m-0">
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				<img src="images/LogoLight.svg" width="30" height="30" class="d-inline-block align-top" alt="&gt;N5_" />
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navbarSupportedContent" class="collapse navbar-collapse">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Docs</a>
					</li>
				</ul>
			</div>
		</nav>
	</main>
</template>

<script>
export default {
	name: 'Nav',
	methods: {

	}
}
</script>

<style scoped>

.navbar-brand img {
	width: 3em;
	height: 2em;
}

</style>