<template>
  <v-sheet>

  <v-container class="fill-height">
    <v-responsive class=" fill-height">
      
      <v-row class="d-flex">
        <v-col sm="10" offset-sm="1" md="8" offset-md="2"  cols="3" >
        <h2>Popular Products <v-btn to="store" variant="text" color="primary" size="small">View All</v-btn></h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="10" offset-sm="1" md="8" offset-md="2"  cols="3" >
          <v-row>
            <v-col sm="6" md="4" 
            v-for="(product,i) in products.slice(0,3)" :key="product.name" >
              <VerticalCard :product="product" @add="adding"></VerticalCard>
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            color="warning"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-snackbar 
  v-model="set"
  color="success">
    Successfully added item
    
    <v-btn variant="text" color="primary" @click="()=>{set=!set}">
      Close
    </v-btn>
  </v-snackbar>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';
  import VerticalCard from "../cards/VerticalCard.vue";
  import products from "../../products"
  import axios from "axios"
  const set= ref(false)
  const adding = (image,name,price)=>{
  set.value=!set.value
  const payload={image,name,price}
  axios.post("http://localhost:3000/items",payload).then(()=>{console.log("success")}).catch(()=>{console.log("fail")})
}
</script>
