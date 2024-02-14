import { createRouter, createWebHistory } from 'vue-router'
import Devices from '../pages/Devices.vue'
import Requests from '../pages/Requests.vue'
import Users from '../pages/Users.vue'
import TableVue from '../pages/Table.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'device', path: '/device', component: Devices },
        { name: 'requestsId', path: '/requests/:id', component: Requests },
        { name: 'users', path: '/users', component: Users },
        { name: 'table', path: '/table', component: TableVue, alias: '/' },
    ]

})