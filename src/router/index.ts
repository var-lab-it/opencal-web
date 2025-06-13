import {createRouter, createWebHistory} from 'vue-router';
import Login from '../components/dashboard/Login.vue';
import {isAuthenticated} from '../services/auth';
import BookingIndex from "../components/booking/BookingIndex.vue";
import CancelBooking from "../components/booking/CancelBooking.vue";
import Account from "../components/dashboard/Account.vue";
import Start from "../components/Start.vue";
import PasswordRequest from "../components/PasswordRequest.vue";
import PasswordResest from "../components/PasswordResest.vue";
import Appointments from "../components/dashboard/Appointments.vue";
import CalDavAuthsList from "../components/dashboard/CalDavAuth/CalDavAuthsList.vue";

const routes = [
    {
        name: 'start',
        path: '/',
        component: Start,
    },
    {
        name: 'login',
        path: '/dashboard/login',
        component: Login
    },
    {
        name: 'password_request',
        path: '/password/request',
        component: PasswordRequest
    },
    {
        name: 'password_reset',
        path: '/password/reset/:token/:email',
        component: PasswordResest
    },
    {
        name: 'booking_index',
        path: '/:email',
        component: BookingIndex
    },
    {
        name: 'cancel_booking',
        path: '/event/:id/cancel/:hash',
        component: CancelBooking
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Appointments,
        meta: {requiresAuth: true}
    },
    {
        name: 'account',
        path: '/dashboard/account',
        component: Account,
        meta: {requiresAuth: true}
    },
    {
        name: 'caldav_auths',
        path: '/dashboard/account/caldav',
        component: CalDavAuthsList,
        meta: {requiresAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next('/dashboard/login');
    } else {
        next();
    }
});

export default router;
