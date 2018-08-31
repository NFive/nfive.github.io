<template>
	<main class="w-100 h-100 m-0">
		<div class="header h-100">
			<div class="w-100 mt-2 background">
				<parallax>
					<img src="images/background1.jpg" class="w-100" />
				</parallax>
			</div>
			<div class="logo mt-5 p-2 col-lg-8 d-flex align-items-center justify-content-center">
				<img src="images/LogoDark.svg" class="col-4" alt="&gt;N5_" />
			</div>
			<div class="w-100 d-flex flex-column-reverse flex-lg-row justify-content-lg-center">
				<div class="d-flex col-lg-8 ">
					<div class="p-5 card shadow-sm">
						<vue-markdown :source="source" />
					</div>
				</div>
				<div class="px-2 mx-lg-5 col-6 col-lg-3 d-flex flex-column align-self-center align-self-lg-start">
					<a href="https://github.com/NFive/NFive/releases" target="_blank"><div class="card p-2 mb-5 lead shadow-sm align-items-center">Releases</div></a>
					<a href="https://github.com/NFive/NFive" target="_blank"><div class="card p-2 mb-5 lead shadow-sm align-items-center">GitHub</div></a>
					<a href=""><div class="card p-2 mb-5 lead shadow-sm align-items-center">Docs</div></a>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

import Parallax from 'vue-parallaxy'
import VueMarkdown from 'vue-markdown'
import JQuery from 'jquery'
const $ = JQuery

export default {
	name: 'Home',
	components: {
		Parallax,
		VueMarkdown,
		JQuery
	},
	data() {
		return {
			source: 'NFive'
		}
	},
	mounted () {
		$.get('https://raw.githubusercontent.com/NFive/NFive/master/README.md', (data) => {
			data = data.replace(/\s*\[!\[/g, '[![')
			data = data.replace(/# NFive/, '# NFive\n')
			this.source = data
		})
	},
	methods: {

	}
}

</script>

<style scoped>

main {
	position: absolute;
}

main .background {
	position: fixed;
}

.header .logo img {
	filter: drop-shadow(0.1rem 0.225rem 0.15rem rgba(0, 0, 0, 0.475));
}

.card {
	color: #ccc;
	background: rgba(0, 0, 0, 0.8);
	border-radius: 0;
}

.shadow-sm {
	box-shadow: 0.1rem 0.225rem 0.15rem rgba(0, 0, 0, 0.475) !important;
}

</style>
