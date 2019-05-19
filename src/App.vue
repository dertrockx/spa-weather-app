<template>
  <div id="app">
    <div id="date">{{ currentDate }}</div>
    <h1>A simple weather app created using VueJS</h1>
    <CitySearch />
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "./components/Navbar"
import CitySearch from "@/components/CitySearch"
export default {
  name: 'App',
  components: {
    Navigation,
    CitySearch
  },
  computed: {
    ...mapGetters([
      "currentDate"
    ])
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

body {
  font-family: "Open Sans", sans-serif;
}

#app {
  padding: 1em;
}

h1 {
  text-align: center;
}
#date {
  text-align: center;
  color: #358BBA;
}
</style>
