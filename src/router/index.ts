import { createRouter, createWebHistory } from 'vue-router'
import Devices from '../pages/Devices.vue'
import Requests from '../pages/Requests.vue'
import TableVue from '../pages/Table.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'device', path: '/vue_device/device', component: Devices },
        { name: 'requestsId', path: '/vue_device/requests/:id', component: Requests },
        { name: 'table', path: '/vue_device/table', component: TableVue, alias: '/' },
    ]

})