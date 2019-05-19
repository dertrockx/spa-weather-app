<template>
	<div v-if="chosen">
		<WeatherData :data="chosen" />
	</div>
</template>
<script>
import WeatherData from "@/components/WeatherData"
import { mapState } from "vuex";
export default {
	name: "Home",
	computed: {
		...mapState([
			"chosen"
		]),
	},
	components: {
		WeatherData
	}

}
</script>
<style scoped>
div {
	text-align: center;
	
}

</style>