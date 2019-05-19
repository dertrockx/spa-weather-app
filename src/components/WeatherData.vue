<template>
	<div>
		<img :src="this.icon_url"/>
		<p>{{ data.weather[0].description }} </p>
		<p>{{ data.main.temp }} * Celcius</p>
		<p>{{ data.main.pressure }} hPa</p>
		<p v-if="data.dt_txt">{{ data.dt_txt }}</p>
	</div>
</template>
<script>
const icon_url = "http://openweathermap.org/img/w/{{ get_city.icon }}.png";
import { mapState } from "vuex";
export default {
	name: "WeatherData",
	props: [ "data" ],
	computed: {
		icon_url() {
			return `http://openweathermap.org/img/w/${this.data.weather[0].icon}.png`
		}
	}

}
</script>
<style scoped>
div {
	text-align: center;
	float: none;
	display: inline-block;
	margin: 2em;
}

img {
	width: 75px;
}
p {
	font-size: 1em;
}
</style>