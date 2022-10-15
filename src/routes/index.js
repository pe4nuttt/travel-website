import Home from '~/pages/Home';
import Services from '~/pages/Services';
import Trips from '~/pages/Trips';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { id: 1, path: '/', component: Home },
    { id: 2, path: '/sign-up', component: SignUp },
];

const privateRoutes = [
    { id: 3, path: '/services', component: Services },
    { id: 4, path: '/trips', component: Trips },
];

export { privateRoutes, publicRoutes };
