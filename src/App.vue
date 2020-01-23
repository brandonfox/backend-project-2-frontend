<template>
  <div id="app">
    <NewPasteBox/>
    <PasteList/>
  </div>
</template>

<script>
import NewPasteBox from "@/components/NewPasteBox";
import axios from 'axios'
import PasteList from "@/components/PasteList";

global.axios = axios;
global.backend = "http://127.0.0.1:25801/api";

export default {
  name: 'app',
  components: {
    PasteList,
    NewPasteBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
