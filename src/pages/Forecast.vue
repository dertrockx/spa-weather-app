<template>
	<div v-if="forecast" id="forecast">
		<WeatherData v-for="(f, index) in forecast.list" :data="f" :key="index" />
	</div>
</template>
<script>
import { mapState } from "vuex";
import WeatherData from "@/components/WeatherData";

export default {
	name: "Forecast",
	components: {
		WeatherData
	},
	computed: {
		...mapState([
			"forecast"
		])
	}
}
</script>
<style scoped>
#forecast {
	left: 15%;
	white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    width: 70%;
}
</style>
