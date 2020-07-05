import Vue from "vue";
import Vuex from "vuex";
import App from "../components/App.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// Constants
		moveThreshold: 5,

		//Variables
		chaosElement: null,
		mode: "chaos", // or "order"
		mouseDownPos: {
			x: null,
			y: null
		}
	},
	mutations: {
		toggleMode: function(state){
			if(state.mode === "chaos"){
				state.mode = "order";
			}else{
				state.mode = "chaos";
			}
		},
		setChaosElement: function(state, el){
			state.chaosElement = el;
		},
		setMouseDownPos: function(state, pos){
			state.mouseDownPos.x = pos.x;
			state.mouseDownPos.y = pos.y;
		}
	},
	actions: {

	}
});

const app = new Vue({
	el: "#page-container",
	store: store,
	render: function(createElement){
		return createElement(App, {
			props: {
				mode: store.state.mode
			},
			on: {
				chaosDown: function(el){
					store.commit("setChaosElement", el);
				}
			},
		});
	},
	mounted: function(){
		this.$nextTick(() => {
			document.addEventListener("mousedown", (e) => {
				const bodyBox = document.body.getBoundingClientRect();

				this.$store.commit("setMouseDownPos", {
					x: e.screenX - bodyBox.left,
					y: e.screenY - bodyBox.top
				});
			});

			document.addEventListener("mousemove", (e) => {
				const bodyBox = document.body.getBoundingClientRect();
				const el = this.$store.state.chaosElement;

				const mouseX = e.screenX - bodyBox.left;
				const mouseY = e.screenY - bodyBox.top;

				if(el && pMouseX !== null && pMouseY !== null){
					const deltaX = mouseX - pMouseX;
					const deltaY = mouseY - pMouseY;

					const boundingBox = el.getBoundingClientRect();
					const newX = boundingBox.x + deltaX;
					const newY = boundingBox.y + deltaY;

					el.style.left = `${newX}px`;
					el.style.top = `${newY}px`;
				}

				pMouseX = mouseX;
				pMouseY = mouseY;
			});

			document.addEventListener("mouseup", (e) => {
				const el = this.$store.state.chaosElement;
				const boundingBox = el.getBoundingClientRect();

				if(boundingBox.right > this.$el.clientWidth){
					el.style.left = `${this.$el.clientWidth - boundingBox.width}px`;
				}else if(boundingBox.left < 0){
					el.style.left = "0px";
				}

				if(boundingBox.bottom > this.$el.clientHeight){
					el.style.top = `${this.$el.clientHeight - boundingBox.height}px`;
				}else if(boundingBox.top < 0){
					el.style.top = "0px";
				}

				this.$store.commit("setChaosElement", null);
			});
		});
	}
});

let pMouseX = null;
let pMouseY = null;