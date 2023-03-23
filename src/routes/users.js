import Users from '../page/Users';
import UsersIcon from '../page/Users/add/AddUser';

import { permission } from '../constants/permission';
import { CREATE, EDIT } from './contant'
export const usersRouter = [
    {
        path: "/users",
        exact: true,
        mani: () => <Users />,
        permission: [permission.admin]
    },
    {
        path: `/users${CREATE}`,
        exact: true,
        mani: () => <UsersIcon />,
        permission: [permission.admin]
    },
    {
        path: `/users${EDIT}`,
        exact: true,
        mani: () => <UsersIcon />,
        permission: [permission.admin]
    },
]