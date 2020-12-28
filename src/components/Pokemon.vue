<template>
  <div>
    <small>{{ url }}</small>

    <v-card max-height="300" max-width="450">
          <v-img :src="pokemon.front" max-height="50" max-width="50"></v-img>

          <div class="overline mb-4">{{ num }} - {{ name | upper }}</div>
          <v-list-item-title class="headline mb-1">
            {{ pokemon.type }}
          </v-list-item-title>
      
    </v-card>
  </div>
</template>

<script>
import Pokemons from "../services/pokemons";

export default {
  props: {
    num: Number,
    name: String,
    url: String,
  },
  data() {
    return {
      pokemon: {
        type: "",
        front: "",
        back: "",
      },
    };
  },
  filters: {
    upper: function (value) {
      var newName = value[0].toUpperCase() + value.slice(1);
      return newName;
    },
  },
  created: function () {
    Pokemons.findImg(this.url).then((res) => {
      console.log(res.data);
      this.pokemon.type = res.data.types[0].type.name;
      this.pokemon.front = res.data.sprites.front_default;
      this.pokemon.back = res.data.sprites.back_default;
      console.log(this.pokemon);
    });
  },
};
</script>

<style scoped>
</style>