<template>
    <v-main>
      <v-row>
        <!-- divide la pantalla en 12 columnas-->
        <v-col cols="7">
          <v-data-table :headers="headers" 
                        :items="pokemones"  
                        :items-per-page="15" 
                        class="elevation-3"
                        @click:row="gotoPokemon">
          </v-data-table>
        </v-col>
        <v-col>
          <card :pokemon="pokemonSelected" />
        </v-col>
      </v-row>
    </v-main>
</template>

<script>
import Card from './components/card.vue';
export default {
  name: 'App',
  components: {
    Card
  },
  
  data() {
    return {
    pokemones: [],
    pokemonSelected: {},
    headers: [
      {
        text: 'Pokemon',
        align: 'center',
        sortable: true,
        value: 'name'
      },
      {
        text: 'Url',
        align: 'start',
        sortable: false,
        value: 'url'
      }
    ] 
    }
  },
  methods: {
    async obtenerPokemones(){
      try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118')
      //limitado a 1118, si no se limita solo se muestran 20
      const data = await res.json()
      this.pokemones = data.results
    } catch (error) {
      console.log(error)
    }
  },
    async gotoPokemon(item){
      try{
        const res = await fetch(item.url)
        const data = await res.json()
        this.pokemonSelected = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat
        }
        console.log(this.pokemonSelected)
      } catch(error){
        console.log(error)
      }
    }
  },
  created(){
    this.obtenerPokemones();
  },
};
</script>
