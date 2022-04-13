import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../views/ContactList.vue'
import NewContact from '../views/NewContact.vue'
import EditContact from '../views/EditContact.vue'
import Login from '../views/Login.vue'

//const routerHistory = createWebHistory()
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/login'
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactList
    },
    {
        path: '/newcontact',
        name: 'NewContact',
        component: NewContact
    },
    {
        path: '/editcontacts/:contactId',
        name: 'EditContact',
        component: EditContact
    },
    {
        path: '/login/:username/:password',
        // path: '/login/:userpass',
        name: 'Login',
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router