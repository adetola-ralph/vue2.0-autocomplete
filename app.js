import Vue from 'vue';
// import autocomplete from './src/autocomplete.vue';
import autocomplete from './index.js';

new Vue({
	el: '#app',
	components: {
		autocomplete
	},
	data: {
		receivedData: {}
	},
	methods: {
		listAlert(data) {
			this.receivedData = data;
		}
	}
})