<script setup lang="ts">
import { computed } from 'vue';
import Authorization from './components/Authorization.vue';
import Table from './components/Table.vue';
import store from './store/store';

const isError = computed(() => store.state.isError);
</script>

<template>
  <div>
    <Authorization v-if="isError" />
    <Table v-else />
  </div>
</template>

<style scoped></style>
