import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let date = require('date-and-time');
let now = new Date();

const state = {
	chosen: "",
	forecast: null
}

const getters = {
	currentDate: () => {
		return date.format(now, "ddd MM DD YYYY")
	}
}

const mutations = {
	CHANGE_CHOSEN: (state, city) => {
		state.chosen = city
	},
	CHANGE_FORECAST: (state, forecast) => {
		state.forecast = forecast
	}
}

const actions = {
	changeChosen: (context, city) => {
		context.commit("CHANGE_CHOSEN", city)
	},
	changeForecast: (context, forecast) => {
		context.commit("CHANGE_FORECAST", forecast)
	}
}

const store = new Vuex.Store({
	state,
	getters,

	mutations,
	actions
})
export default store