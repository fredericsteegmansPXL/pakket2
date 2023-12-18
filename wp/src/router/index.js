import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import FavoriteView from '@/views/FavoriteView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/products',
            component: ProductsView
        },
        {
            path: '/cart',
            component: CartView
        },
        {
            path: '/about-us',
            component: AboutView
        },
        {
            path: '/contact',
            component: ContactView
        },
        {
            path: '/favoriet',
            component: FavoriteView
        }
    ]
})

export default router