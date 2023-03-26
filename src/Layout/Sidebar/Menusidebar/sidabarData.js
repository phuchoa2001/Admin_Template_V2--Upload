import { HomeOutlined, UserOutlined , FileImageOutlined } from '@ant-design/icons';
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
    },
    {
        title: "Tải lên hình ảnh",
        icon: <FileImageOutlined />,
        path: "/images",
        permission: [permission.admin]
    }
]