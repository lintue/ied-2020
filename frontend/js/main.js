import Vue from "vue";
import App from "../components/App.vue";

App.data = function(){
	return {};
};

const app = new Vue({
	el: "#page-container",
	render: function(createElement){
		return createElement(App);
	}
});