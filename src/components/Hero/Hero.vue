<template>
  <div class="container">
    
    <div class="card" v-for="item of herois">
      <img :src="getImagem(item.thumbnail)" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.desc }}</p>
      <button @click="details(item.id)" class="btn">Detalhes...</button>
    </div>

    <p></p>

    <button @click="getNewHero()">Teste</button>
    <button @click="getOutHero()">Tirar 10</button>
    <nc-pagination :limit="limit" :offset="offset" :total="total" />
  </div>
</template>

<script>
import apiService from '../../api/marvel.js'

import NcPagination from '../NcPagination/NcPagination'
export default {
  name: 'Hero',
   components:{
     "nc-pagination": NcPagination,
  },
  data() {
    return {
      herois: [],
      limit: 10,
      offset: 0,
      total: [],
      
    }
  },
  methods: {
    getImagem: (img) => {
        return img.path + '/portrait_medium.jpg';
    },
    details(id) {
      apiService.getById(10, retorno => {
        this.herois = retorno.data.data.results;
      }, id)
    },
    back(){
      this.$routes.push({name: 'inicio'});
    },
    getNewHero(){
      this.limit += 10;
      this.offset += 10;
      this.getHero(this.limit, this.offset);
    },
    getOutHero(){
      this.limit -= 10;
      this.offset -= 10;
      this.getHero(this.limit, this.offset);
    },
    getHero(limit, offset){
      apiService.getAllComics(limit, offset, retorno => {
        this.herois = retorno.data.data.results;
        this.total = retorno.data.data.total / 10 ;
        console.log(this.total)
      })
    },
  },
  mounted() {
    this.getHero(10, 0);   
  },
  
}
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
}

.card {
  float: left;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid #323232;
}

.add {
  position: fixed;
  border: 0;
  background: #41b883;
  border-radius: 50%;
  color: #fff;
  padding: 10px;
  bottom: 25px;
  right: 25px;
  width: 35px;
  height: 35px;
}
</style>
