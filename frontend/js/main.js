import Vue from "vue";
import Vuex from "vuex";
import App from "../components/App.vue";
import students from "../data/students.json";
import entries from "../data/works.json";

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
		entries: _.shuffle(entries),
		// entries: [
		// 	{
		// 		"category": "description",
		// 		"student": "Quincy Cardinale",
		// 		"description": "This is a proposal for an immersive educational exhibition that explores the possibilities of what dark matter could be. The goal is to make complex physics accessible to adult audiences interested in science."
		// 	}
		// ],
		students: _.shuffle(students)
		// students: [
		// 	{
		// 		"name": "Kenneth Lim",
		// 		"instagram": "https://www.instagram.com/quincy.cool/",
		// 		"portfolio": "https://www.quincy.cool/",
		// 		"RCA2020": "2020.rca.ac.uk/students/quincy-cardinale"
		// 	}
		// ]
	},
	mutations: {
		toggleMode: function(state){
			if(state.mode === "chaos"){
				state.mode = "order";
			}else{
				state.mode = "chaos";
			}

			if(state.mode === "chaos"){
				document.body.style.background = "#242424";
			}else{
				document.body.style.background = "#FFFFFF";
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
				entries: store.state.entries,
				students: store.state.students
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
				if(store.state.mode === "chaos"){
					this.$store.commit("setMouseDownPos", {
						x: e.screenX + document.body.scrollLeft,
						y: e.screenY + document.body.scrollTop
					});

					pMouseX = e.screenX;
					pMouseY = e.screenY;
				}
			});

			document.addEventListener("mousemove", (e) => {
				if(store.state.mode === "chaos"){
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
				}
			});

			document.addEventListener("mouseup", (e) => {
				if(store.state.mode === "chaos"){
					const el = this.$store.state.chaosElement;
					if(el){
						const boundingBox = el.getBoundingClientRect();

						if(boundingBox.right + window.scrollX > this.$el.clientWidth){
							el.style.left = `${this.$el.clientWidth - boundingBox.width}px`;
						}else if(boundingBox.left < 0){
							el.style.left = "0px";
						}

						if(boundingBox.bottom + window.scrollY > this.$el.clientHeight){
							el.style.top = `${this.$el.clientHeight - boundingBox.height}px`;
						}else if(boundingBox.top + window.scrollY < window.innerHeight / 10){
							el.style.top = `${window.innerHeight / 10}px`;
						}

						this.$store.commit("setChaosElement", null);
					}
				}
			});
		});
	}
});

let pMouseX = null;
let pMouseY = null;