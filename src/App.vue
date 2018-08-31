<style lang="scss">

@import '~bootstrap/scss/bootstrap';

.component-fade-enter-active {
	transition: all 0.5s ease;
}

.component-fade-leave-active {
	transition: all 0.1s;
}

.component-fade-enter,
.component-fade-leave-to {
	opacity: 0;
}

body {
	color: #ccc;
	background: #222;
}

pre {
	color: #fff;
}

code {
	color: #dc7c7c;
}

</style>

<template>
	<main>
		<Nav></Nav>
		<transition name="component-fade">
			<component :is="view" @setView="setView" />
		</transition>
	</main>
</template>

<script>
//import $ from 'jquery'

import Nav from './components/Nav'
import Home from './components/Home'


export default {
	name: 'App',

	components: {
		Nav,
		Home
	},

	data() {
		return {
			view: 'Home'
		}
	},

	methods: {
		setView(view) {
			this.view = view
		}
	}
}
</script>

