<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { getData } from '../api/fetch';
import {IDevice} from '../api/type'
import Device from '../components/Device.vue';
import store from '../store/store.ts'

const searchQuery = ref('');
const data = computed<IDevice[] | null>(() => store.state.devices);
const favorites = computed<number[] | null>(() => store.state.favorites);
const showFavorites = ref(false);

const filteredData = computed(() => {
    if (!data.value) return [];
    return data.value.filter(item => {
        return (
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.created_at.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.updated_at.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});

const currentData = computed(() => {
    return showFavorites.value && favorites.value ? favorites.value.map(id => data.value?.find(item => item.id === id)) : filteredData.value;
});

const handleClick = (id: number) => {
    if (favorites.value && favorites.value.includes(id)) {
        return;
    }
    store.commit('setFavorites', id)
}

const toggleView = () => {
    showFavorites.value = !showFavorites.value;
}

onMounted(async () => {
    const deviceList = await getData<any>('/api/devices')
    store.commit('setDevice', deviceList.devices.data)
})

</script>
<template>
    <div>
        <div v-if="data !== null">
            <input v-model="searchQuery" type="text" placeholder="Search">
            <button @click="toggleView">{{ showFavorites ? 'Show All' : 'Show Favorites' }}</button>
            <div>
                <div v-for="item in currentData" :key="item?.id" class="catalog__item table">
                    <Device v-if="item !== undefined" :id="item.id" :uuid="item.uuid" :name="item.name" :type="item.type"
                        :install="item.install" :count_requests="item.count_requests" :created_at="item.created_at"
                        :updated_at="item.updated_at" :version="item.version" :cb="handleClick" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>
