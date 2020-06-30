import Vue from "vue";
import App from "../components/App.vue";

const app = new Vue({
	el: "#page-container",
	render: function(createElement){
		return createElement(App);
	},
	data: {
		chaosElement: null
	}
});

let pMouseX = null;
let pMouseY = null;
document.addEventListener("mousemove", function(e){
	if(pMouseX !== null && pMouseY !== null && app.$data.chaosElement){
		const deltaX = e.screenX - pMouseX;
		const deltaY = e.screenY - pMouseY;

		const boundingBox = app.$data.chaosElement.getBoundingClientRect();
		app.$data.chaosElement.style.left = `${boundingBox.x + deltaX}px`;
		app.$data.chaosElement.style.top = `${boundingBox.y + deltaY}px`;
	}

	pMouseX = e.screenX;
	pMouseY = e.screenY;
});

document.addEventListener("mouseup", function(e){
	app.$data.chaosElement = null;
});