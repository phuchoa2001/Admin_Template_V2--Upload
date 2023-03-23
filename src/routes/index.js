import Home from '../page/Home';
import Link404 from '../page/Link404';

import { usersRouter } from './users';

import { permission } from '../constants/permission';

const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
        permission: [permission.all]
    },
    ...usersRouter,
    {
        path: "",
        exact: true,
        mani: () => <Link404 />,
        permission: [permission.all]
        ,
    },
]
export default router;