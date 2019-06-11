import { wallet } from 'utils/wallet';
import routeConfig from './routes';

const loginRoutes = ['walletConversion'];

export default function (VueRouter) {
    // Init router
    const router = new VueRouter({
        // mode: process.env.NODE_ENV === 'dev' ? 'hash' : 'history',
        routes: routeConfig.routes
    });

    router.beforeEach((to, from, next) => {
        if (loginRoutes.indexOf(to.name) >= 0 && !wallet.isLogin) {
            (to.name !== 'start') && wallet.setLastPage(to.name);
            router.replace({ name: 'start' });
            return;
        }

        next();
    });

    return router;
}
