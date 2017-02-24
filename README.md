# Vue 2.0 Autocomplete reusable component


#### Props
|props |type|explanation|
|--------|------|--------------|
|url (required)| String | url where the data would be retreived |
|label (required)| String | key of the object to be displayed |
|datakey (required)| String | key of the objects unique identifier |
|placeholder | String | placeholder text fir input field |
|type| String | input field type |
|inputclass | String | class for the input text field |
|dropdownclass | String | class for the dropdown ul list |
|dropdownitemclass | String | class for the dropdown ul list item |

#### Events
**list-select**: Event emitted when a list item is clicked, it emits the object at that position.


#### Full prop and events use
``` javascript
<autocomplete :url="'url'"
			  :label="'labael'"
			  :datakey="'datakey'"
			  :placeholder="'placeholder text'"
			  :type="'type'"
			  :inputclass="'input-class'"
	    	  :dropdownclass="'dropdown-class'"
	    	  :dropdownitemclass="'dropdown-item-class'"
	    	  @list-select="parentFunction">
</autocomplete>
```	    	  

