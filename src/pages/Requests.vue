<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { getData } from '../api/fetch';
import { IDeviceRequest, IDataDevice } from '../api/type'

const route = useRoute()
const id = route.params.id
const device = ref<IDataDevice[]>([]);

onMounted(async () => {
    const { requests } = await getData<IDeviceRequest>(`/api/devices/${id}/requests`)
    console.log(device)
    device.value = requests
});

</script>

<template>
    <div>
        <div v-if="device.length <= 0">
            Loading...
        </div>
        <div v-else>
            <div v-for="item in device" :key="item.id" class="catalog__item table">
                <div class="cardDevice">
                    <div>{{ item.path }}</div>
                    <div>{{ item.method }}</div>
                    <div>{{ item.payload }}</div>
                    <div>{{ item.response }}</div>
                    <div>{{ item.headers_response }}</div>
                    <div>{{ item.curl }}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.cardDevice {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
}
</style>
