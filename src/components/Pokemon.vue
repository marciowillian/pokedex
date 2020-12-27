<template>
  <div>
    <h1>{{ num }} {{ name | upper }}</h1>
    <small>{{ url }}</small>

    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </div>
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
      pokemon: {},
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

<style>
</style>