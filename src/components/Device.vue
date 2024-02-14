<script setup lang="ts">
import { computed, ref } from 'vue';
import { IDevice, ILogResponse, ILog } from '../api/type';
import store from '../store/store';
import { getData } from '../api/fetch';


const logs = ref<ILog[]>([]);
const modalVisible = ref(false);

const { id, uuid, name, type, created_at, updated_at, install, count_requests, cb } = defineProps<IDeviceCard>();


interface IDeviceCard extends IDevice {
    cb: (device: number) => void;
}

const isInFavorites = computed(() => store.state.favorites.includes(id));
const openModal = async () => {
    modalVisible.value = !modalVisible.value;
    if (modalVisible.value) {
        const logsRequest = await getData<ILogResponse>(`/api/devices/${id}/logs`);
        logs.value = logsRequest.logs
    }

};

</script>

<template>
    <div class="cardDevice" @click="cb(id)">
        <div class="cell" v-if="isInFavorites" style="width: 30px;">*</div>
        <div class="cell">id {{ id }}</div>
        <div><router-link :to="{ name: 'requestsId', params: { id: id } }">request</router-link></div>
        <div class="cell">uuid {{ uuid }}</div>
        <div class="cell">name {{ name }}</div>
        <div class="cell">type {{ type }}</div>
        <div class="cell">created_at {{ created_at }}</div>
        <div class="cell">updated_at {{ updated_at }}</div>
        <div class="cell">install {{ install }}</div>
        <div class="cell">count_requests {{ count_requests }}</div>
    </div>
    <button @click="openModal">logs</button>
    <div v-if="modalVisible">
        <div>Логи</div>
        <div v-if="logs.length === 0">Loading...</div>
        <div v-else>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Сообщение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="log in logs" :key="log.id">
                        <td>{{ log.created_at }}</td>
                        <td>{{ log.message }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped>
.cardDevice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}

.cell {
    flex: 1;
    padding: 5px;
    display: flex;
    align-items: center;
}

.cell:not(:last-child) {
    border-right: 1px solid #ccc;
}
</style>
