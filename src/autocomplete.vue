<template>
	<div>
		<input :type="type" :value="inputField" @input="getData" @focusout="clearInput">
		  <ul id="autodata" class="autodata-list" v-if="users.length > 0 && showList">
		    <template v-for="(data, index) in datalist">
		      <li @click="itemClick(data)" class="autodata-list-item" :key="index">
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
	    }
	  },
  	methods: {
  		itemClick(data) {
  			$emit('list-select', data);
  		}
  	}
}
</script>