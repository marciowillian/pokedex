<template>
  <div id="app">

    <h1 v-for="item in pokemons" :key="item.url">
      {{ item.name }}
    </h1>

  </div>
</template>

<script>

import Pokemons from './services/pokemons'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      pokemons: []
    }
  },
  created: function(){
  },
   mounted(){
     Pokemons.find().then((res)=>{
       this.pokemons = res.data.results
     })
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
