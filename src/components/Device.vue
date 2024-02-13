<script setup lang="ts">
import IDevice from '../api/type';



const { id, uuid, name, type, created_at, updated_at, install, count_requests } = defineProps<IDevice>();

</script>

<template>
    <div class="cardDevice">
        <div class="cell">id {{ id }}</div>
        <div class="cell">uuid {{ uuid }}</div>
        <div class="cell">name {{ name }}</div>
        <div class="cell">type {{ type }}</div>
        <div class="cell">created_at {{ created_at }}</div>
        <div class="cell">updated_at {{ updated_at }}</div>
        <div class="cell">install {{ install }}</div>
        <div class="cell">count_requests {{ count_requests }}</div>
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
