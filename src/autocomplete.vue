<template>
	<div>
		<input :type="type" :value="inputField" @input="getData" @focusout="clearInput" :class="inputclass">
		  <ul id="autodata" class="autodata-list" v-if="datalist.length > 0 && showList" :class="dropdownclass">
		    <template v-for="data in datalist">
		      <li @click="itemClick(data)" class="autodata-list-item" :key="data[key]" :class="dropdownitemclass">
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
	    key: {
	    	type: String,
	    	required: true,
	    },
	    inputclass,
	    dropdownclass,
	    dropdownitemclass
	  },
  	methods: {
  		itemClick(data) {
  			$emit('list-select', data);
  		},
  		getData: debounce((e) => {
  			this.inputField = e.target.value.trim();
  			
  			if (this.inputField.length > 0) {
		        const url = `${this.url}${this.inputField}`;
		        axios.get(url).then((result) => {
		          this.users = result.data;
		        }).catch((error) => {
		          this.errorMessage = error.respose || error.message;
		        });
	      	} else {
	        	this.showList = false;
	        	this.datalist = [];
	      	}
  		}, 350);
  	}
}
</script>