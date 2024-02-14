<script setup lang="ts">
import { computed } from 'vue';
import Authorization from './components/Authorization.vue';
import store from './store/store';

const isError = computed(() => store.state.isError);
</script>

<template>
  <div>
    <Authorization v-if="isError" />
    <div v-else>
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped></style>
