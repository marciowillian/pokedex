<template>
  <div id="app">
    <div class="column is-half">
      <div v-for="(poke, index) in pokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Pokemons from "./services/pokemons";
import Pokemon from "./components/Pokemon";

export default {
  name: "App",
  components: {
    Pokemon,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  created: function () {},
  mounted() {
    Pokemons.find().then((res) => {
      this.pokemons = res.data.results;
    });
  },
};
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
