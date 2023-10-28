import config from '~/config';

import Home from '~/pages/Home';
import About from '~/pages/About';
import Skill from '~/pages/Skill';
import Contact from '~/pages/Contact';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.about,
        component: About,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
    // {
    //     path: config.routes.skill,
    //     component: Skill,
    // },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
