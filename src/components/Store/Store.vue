<script setup>
import { ref } from 'vue';
 import products from '@/products';
import VerticalCard from '../cards/VerticalCard.vue';
import axios from "axios"
const set= ref(false)
const adding = (image,name,price)=>{
  set.value=!set.value
  const payload={image,name,price}
  axios.post("http://localhost:3000/items",payload).then(()=>{console.log("success")}).catch(()=>{console.log("fail")})
}
</script>

<template>
    <div>
        <h1>Products</h1>
        <v-container>
            <v-row>
                <v-col sm="6" md="4" v-for="product in products" :key="product.name">
                    <VerticalCard :product="product" @add="adding"></VerticalCard>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar 
  v-model="set"
  color="success">
    Successfully added item
    
    <v-btn variant="text" color="primary" @click="()=>{set=!set}">
      Close
    </v-btn>
  </v-snackbar>
    </div>
</template>


<style lang="scss" scoped>

</style>