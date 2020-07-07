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
		},
		entries: [
			{
				title: "Something Along These Lines",
				description: "A room-sized installation that aims to induce the feeling of bewilderment at not understanding a language, with specific focus on the use of idioms or phrases that are language/culture specific.",
				media: "something.jpg",
				student: "Kenneth Lim",
				category: "project"
			}
		]
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
				mode: store.state.mode,
				entries: store.state.entries
			},
			on: {
				chaosDown: function(el){
					store.commit("setChaosElement", el);
				},
				switchMode: function(){
					store.commit("toggleMode");
				}
			},
		});
	},
	mounted: function(){
		this.$nextTick(() => {
			document.addEventListener("mousedown", (e) => {
				this.$store.commit("setMouseDownPos", {
					x: e.screenX + document.body.scrollLeft,
					y: e.screenY + document.body.scrollTop
				});

				pMouseX = e.screenX;
				pMouseY = e.screenY;
			});

			document.addEventListener("mousemove", (e) => {
				const el = this.$store.state.chaosElement;

				const mouseX = e.screenX;
				const mouseY = e.screenY;

				if(el && pMouseX !== null && pMouseY !== null){
					const deltaX = mouseX - pMouseX;
					const deltaY = mouseY - pMouseY;

					const boundingBox = el.getBoundingClientRect();
					const newX = boundingBox.x + deltaX + window.scrollX;
					const newY = boundingBox.y + deltaY + window.scrollY;

					el.style.left = `${newX}px`;
					el.style.top = `${newY}px`;

					pMouseX = mouseX;
					pMouseY = mouseY;
				}
			});

			document.addEventListener("mouseup", (e) => {
				const el = this.$store.state.chaosElement;
				if(el){
					const boundingBox = el.getBoundingClientRect();

					if(boundingBox.right > this.$el.clientWidth){
						el.style.left = `${this.$el.clientWidth - boundingBox.width}px`;
					}else if(boundingBox.left < 0){
						el.style.left = "0px";
					}

					if(boundingBox.bottom > this.$el.clientHeight - document.querySelector("#page-header").clientHeight){
						el.style.top = `${this.$el.clientHeight - boundingBox.height}px`;
					}else if(boundingBox.top < 0){
						el.style.top = "0px";
					}

					this.$store.commit("setChaosElement", null);
				}
			});
		});
	}
});

let pMouseX = null;
let pMouseY = null;