<script setup>
import axios from "axios"
import { watchSyncEffect } from "vue";
import { ref } from "vue";
import { watch} from "vue";
import CCard from "../cards/CCard.vue"
const key=ref(true)
const products=ref([])
const id=ref(0)
const total=ref(0)
watch(key,async()=>{setproducts()})

const setproducts=()=>{
    axios.get("http://localhost:3000/items").then((response)=>{
        products.value=response.data
        console.log('success')
        total.value=0
        for (const i of products.value){
        total.value+=Number(i.price)
    }}
        )
        .catch(()=>{console.log("fail");})
    console.log(products.value)
}
setproducts();
const settotal=()=>{
    for (const i of products.value){
        total.value+=Number(i.price)
    }
}
settotal()
const removing=(name)=>{
    for (const i of products.value){
        if (name==i.name){
            id.value=i.id
        }
    }
    axios.delete(`http://localhost:3000/items/${id.value}`)
    key.value=!key.value
}

</script>

<template>
    <div>
        <v-row>
        <v-col sm="10" offset-sm="1" md="8" offset-md="2"  cols="3" >
          <v-row>
            <v-col sm="6" md="4" 
v-for="product in products" :key="products">
    <CCard  :product="product" @remove="removing"></CCard>
    </v-col>
</v-row>
<v-row class="d-flex justify-center"><h1>TOTAL PRICE : ${{ total }}</h1></v-row>
<v-row class="d-flex justify-center"><v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            color="success"
          >
            Checkout
          </v-btn>
        </v-col></v-row>
</v-col>
</v-row>
    </div>
</template>


<style lang="scss" scoped>

</style>