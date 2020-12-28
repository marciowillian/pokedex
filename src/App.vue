<template>
  <div id="app">
    <div>
      <v-row>
        <v-col cols="12" sm="3" md="3"/>
        <v-col cols="12" sm="6" md="6">
          <v-text-field placeholder="Buscar pokemon pelo nome"></v-text-field>
          <div v-for="(poke, index) in pokemons" :key="poke.url">
            <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
          </div>
        </v-col>
      </v-row>
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
</style>