import Images from '../page/Images';
import AddImages from '../page/Images/add/AddImages';
import { permission } from '../constants/permission';

import { CREATE, EDIT } from './contant'
export const ImageRouter = [
    {
        path: "/images",
        exact: true,
        mani: () => <Images />,
        permission: [permission.admin]
    },
    {
        path: `/images${CREATE}`,
        exact: true,
        mani: () => <AddImages />,
        permission: [permission.admin]
    },
    {
        path: `/images${EDIT}`,
        exact: true,
        mani: () => <AddImages />,
        permission: [permission.admin]
    },
]