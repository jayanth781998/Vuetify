<script setup>
import Store from '@/components/Store/Store.vue';
import SideBar from '@/components/Store/SideBar.vue';
</script>
<template>
    <v-sheet>
        <v-container>
            <v-responsive>
                <v-row class="fill-height">
                    <v-col sm="10" offset-sm="1" md="8" offset-md="2"  cols="3" >
                        <Store ></Store>
                    </v-col>
                </v-row>
            </v-responsive>
        </v-container>
    </v-sheet>
</template>



<style lang="scss" scoped>

</style>