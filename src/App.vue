<template>
  <div id="app">
    <div class="content" cols-12 md6>
      <div v-for="(poke, index) in pokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from "./components/Pokemon";
import Pokemons from "./services/pokemons";

export default {
  name: "App",

  components: {
    Pokemon,
  },

  data: () => ({
    pokemons: [],
  }),
  created: function () {},
  mounted() {
    Pokemons.find().then((res) => {
      this.pokemons = res.data.results;
    });
  },
};
</script>

<style scoped>

  .content {
    display: flex;
    display: inline-block;
    align-content: center;
  }

</style>