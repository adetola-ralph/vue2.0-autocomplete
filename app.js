import Vue from 'vue';
// import autocomplete from './src/autocomplete.vue';
import autocomplete from './index.js';

new Vue({
	el: '#app',
	components: {
		autocomplete
	},
	methods: {
		listAlert(data) {
			console.log(data);
		}
	}
})