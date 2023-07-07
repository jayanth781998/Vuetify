<template>
    <v-card outlined>
                <v-img :src="product.image" height="200px"></v-img>
                <v-card-title>{{product.name}}</v-card-title>
                <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn @click="$emit('remove', product.name)" color="warning" variant="outlined" >
                    Remove Item
                  </v-btn>
                </v-card-actions>
              </v-card>
</template>

<script setup>

defineProps({
    product:{
        type:Object,
        required:true
    }
})
defineEmits(["remove"])
</script>

<style lang="scss" scoped>

</style>