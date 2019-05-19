<template>
  <div>    
  	<ul>
  		<li>
  			<router-link to="/">
  			Home
  			</router-link>
  		</li>
  		<li>
  			<router-link to="/forecast">
  			Forecasts
  			</router-link>
  		</li>
  	</ul>
  </div>
</template>
<script>
	export default {
	  name: 'Navigation'
	}
</script>

<style scoped>
div {
	margin: 2em 0;
}
ul {
	text-align: center;
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 1em;
}
a {
	color: black;
	text-decoration: none;
	padding: 0.5em;
	border-radius: 5px;
}
a:hover {
	background: #f5f5f5;
}
</style>
