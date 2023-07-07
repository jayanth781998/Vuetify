<script setup>
import { ref } from 'vue';

  const drawer=ref("false")
  const items=ref([
    {title: "Home" ,link: "/"},
    {title: "Store" ,link: "/store"},
    {title: "Cart" ,link: "/cart"}])
</script>
<template>
  <v-app-bar flat color="warning">
    <v-toolbar-title>Vuetify Experimental Store</v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="d-flex d-sm-none" color="warning">
      <v-btn @click="drawer=!drawer">
        Menu
      </v-btn>
    </span>
    <v-toolbar-items class="d-none d-sm-flex">
      <v-btn to="/">HOME
      </v-btn>
      <v-btn to="store">
        STORE
      </v-btn>
      <v-btn to="cart">
        CART
      </v-btn>
    </v-toolbar-items>
    
  </v-app-bar>
<v-navigation-drawer v-model="drawer"
absolute="true"
temporary="true"
location="right"
color="warning">
  <v-list>
    <v-list-item
    v-for="item in items"
    :key="item.title"
    :to="item.link"
    link="true">
  <v-list-item-title>{{item.title}}</v-list-item-title></v-list-item>
  </v-list>
</v-navigation-drawer>
</template>


