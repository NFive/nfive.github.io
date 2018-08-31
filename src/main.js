import Vue from 'vue'
import App from './App'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeRegular from '@fortawesome/fontawesome-free-regular'
import FontAwesomeSolid from '@fortawesome/fontawesome-free-solid'

Vue.config.productionTip = false

FontAwesome.library.add(FontAwesomeRegular, FontAwesomeSolid) // TODO: Only load needed icons

new Vue({
	el: 'main',
	render: h => h(App)
})
