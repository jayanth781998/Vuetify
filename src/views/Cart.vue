<script setup>
import Cart from '@/components/cart/Cart.vue';
import { ref } from 'vue';
const name=ref(true)
</script>
<template>
     <v-sheet>

<v-container class="fill-height">
  <v-responsive class=" fill-height">
        <v-sheet>
            <v-container>
                <v-row>
                    <v-col >
                        <Cart ></Cart>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-responsive>
    </v-container>
    </v-sheet>
</template>



<style lang="scss" scoped>

</style>