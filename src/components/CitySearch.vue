<template>
	<div>
		<form @submit.prevent="search">
			<input type="text" v-model="city"/>
			<button type="submit">
				<font-awesome-icon icon="search" />
			</button>
		</form>
		<p>
			{{ message }}
		</p>
	</div>
</template>
<script>

import { mapGetters, mapActions } from "vuex";
import key from "@/key";
export default {
	name: "CitySearch",
	data() {
		return {
			city: "",
			message: ""
		}
	},
	methods: {
		...mapActions([
			"changeChosen",
			"changeForecast"
		]),
		search() {
			console.log(this.city);
			this.$http.get(`weather?q=${this.city}&units=metric&&appid=${key}`)
				.then( (response) => {
					var data = response.data;
					this.changeChosen(data)
				}).catch( (error) => {
					if(error.response.status === 404){
						this.message = "City / Municipality not found!"
					}
				})
			this.$http.get(`forecast?q=${this.city}&units=metric&mode=json&&appid=${key}`)
				.then( (response) => {
					var data = response.data
					this.changeForecast(data)
				}).catch( (error) => {
					if(error.response.status === 404){
						this.message = "City / Municipality not found!"
					}
				})
		}
	},
	watch: {
		city: function(data){
			this.message = "";
		}
	}
}
</script>
<style scoped>
form {
	text-align: center;
}
input {
	font-size: 1em;
	padding: 1em;
	font-weight: bold;
	width: 80%;
	height: 1.5em;
	box-shadow: 0 8px 4px #888888;
}
button {
	background-color: Transparent;
	background-repeat: no-repeat;
	border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    margin-left: -3.5em;
    padding: 0.5em;
}
button:hover{
	background: #f5f5f5;
}
p {
	text-align: center;
}
</style>