<template>
    <div>
        <h1>{{ num }} {{ name | upper }}</h1>
        <small>{{ url }}</small>

        
        <v-card
            elevation="2"
            outlined
            shaped
            tile
        ></v-card>

    </div>
</template>

<script>

import Pokemons from '../services/pokemons'

export default {
    props: {
        num: Number,
        name: String,
        url: String
    },
    data(){
        return {
            pokemon: {}
        }
    },
    filters: {
        upper: function(value) {
            var newName = value[0].toUpperCase() + value.slice(1)
            return newName
        }
    },
    created: function() {
        Pokemons.findImg(this.url).then((res)=>{
            console.log(res.data)
            this.pokemon.type = res.data.types[0].type.name
            this.pokemon.front = res.data.sprites.front_default
            this.pokemon.back = res.data.sprites.back_default
            console.log(this.pokemon)
        })
    }    
}
</script>

<style scoped>

</style>