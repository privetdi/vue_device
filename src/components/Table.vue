<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { getData } from '../api/fetch';
import IDevice from '../api/type'
import store from '../store/store'
import Device from './Device.vue';

const searchQuery = ref('');
const data = computed<IDevice[] | null>(() => store.state.devices);
console.log('state2 data', data.value)

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

onMounted(async () => {
    const deviceList = await getData<any>('/api/devices')
    //    const userList = await getData<any>('/api/users')
    //    console.log('userList', userList)

    store.commit('setDevice', deviceList.devices.data)
})

</script>

<template>
    <div>
        <div v-if="data !== null">
            <input v-model="searchQuery" type="text" placeholder="Search">
            <div v-for="item in filteredData" :key="item.id" class="catalog__item table">
                <Device :id="item.id" :uuid="item.uuid" :name="item.name" :type="item.type" :install="item.install"
                    :count_requests="item.count_requests" :created_at="item.created_at" :updated_at="item.updated_at"
                    :version="item.version" />
            </div>
        </div>

    </div>
</template>

<style scoped></style>
