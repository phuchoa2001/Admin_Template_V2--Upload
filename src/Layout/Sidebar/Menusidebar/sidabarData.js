import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { permission } from '../../../constants/permission';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeOutlined />,
        path: "/",
        permission: [permission.all],
    },
    {
        title: "Tài khoản",
        icon: <UserOutlined />,
        path: "/users",
        permission: [permission.admin]
    }
]