<script setup lang="ts">
import { ref } from 'vue';
import store from '../store/store';
const showModal = ref(false);
const login = ref('');
const password = ref('');

const submitForm = () => {
    store.commit('setAuthorization', { login: login.value, password: password.value })
    showModal.value = false;
    login.value = '';
    password.value = '';
};

if (store.state.authorization.login && store.state.authorization.password) {
    showModal.value = false
} else {
    showModal.value = true
}

</script>

<template>
    <div>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <input v-model="login" type="text" placeholder="Логин">
                <input v-model="password" type="password" placeholder="Пароль">
                <button @click="submitForm">Отправить</button>
                <button @click="showModal = false">Закрыть</button>
            </div>
        </div>
    </div>
</template>
  
<style>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}
</style>
  