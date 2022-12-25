import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import RequestPassword from '../views/RequestPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        }
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !store.state.token) {
//         next({ name: 'login' })
//     } else if (to.meta.requiresGuest && store.state.token) {
//         next({ name: 'app.dashboard' })
//     } else {
//         next();
//     }

// })

export default router;
