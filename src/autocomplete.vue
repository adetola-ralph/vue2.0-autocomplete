<template>
	<div class="autocomplete-container">
		<input :type="type" :value="inputField" @input="getData" @focusout="clear" :class="inputclass">
  		<ul id="autodata" class="autodata-list" v-if="datalist.length > 0 && showList" :class="dropdownclass">
		    <template v-for="data in datalist">
		      	<li @click="itemClick(data)" class="autodata-list-item" :key="data[datakey]" :class="dropdownitemclass">
		        	<span>
	          			{{data[label]}}
		        	</span>
		      	</li>
		    </template>
	  	</ul>
	</div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

export default {
	data(){
	    return {
	      datalist: [],
	      inputField: '',
	      showList: false,
	    };
	  },
	  props: {
	    url: {
	      	required: true,
	      	type: String
	    },
	    type: {
	      	type: String,
	      	default: 'text'
	    },
	    placeholder: {
	      	type: String,
	      	default: 'Please enter a value'
	    },
	    label: {
	    	type: String,
	    	required: true,
	    },
	    datakey: {
	    	type: String,
	    	required: true,
	    },
	    inputclass: String,
	    dropdownclass: String,
	    dropdownitemclass: String
	  },
  	methods: {
  		itemClick(data) {
  			this.$emit('list-select', data);
  			this.clear();
  			this.inputField = '';
  		},
  		getData: debounce(function(e) {
  			this.inputField = e.target.value.trim();
  			this.showList = true;
  			
  			if (this.inputField.length > 0) {
		        const url = `${this.url}${this.inputField}`;
		        axios.get(url).then((result) => {
		          this.datalist = result.data;
		        }).catch((error) => {
		          this.$emit('error-message', error);
		        });
	      	} else {
	        	this.clear();
	      	}
  		}, 350),
  		clear() {
  			setTimeout(() => {
		        // this.inputField = '';
		        this.showList = false;
		        this.datalist = [];
	      	}, 350);
  		}
  	}
}
</script>

<style lang="scss" scoped>
	$grey1: #fbfbfb;
	$grey2: #efefef;

	.autodata-list {
	  	font-family: sans-serif;
	  	font-size: 13px;
	  	list-style-type: none;
	  	background-color: $grey1;
	  	padding-left: 0;
	  	position: absolute;
	  	z-index: 10;
	  	.autodata-list-item {
	  		cursor: pointer;
		    padding: 5px;
		    border-bottom: 1px solid $grey2;
	  	}
	}
</style>