import { createRouter, createWebHistory } from 'vue-router'
import Devices from '../pages/Devices.vue'
import Requests from '../pages/Requests.vue'
import Users from '../pages/Users.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'device', path: '/device', component: Devices },
        { name: 'requests', path: '/requests', component: Requests },
        { name: 'users', path: '/users', component: Users },
    ]

})