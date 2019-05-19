import Vue from 'vue'
import Router from 'vue-router'
import Weather from "@/pages/Weather"
import Forecast from "@/pages/Forecast";

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    },
    {
    	path: '/forecast',
    	name: 'Forecast',
    	component: Forecast
    }
  ]
})
