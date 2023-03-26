import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { SideBarData } from './sidabarData';
import { getCurrentUser } from '../../../redux/authSlice';
import { permission as permissionType } from '../../../constants/permission';

import Styles from './index.module.css';
function MenuSideBar(props) {
    let location = useLocation();
    const { pathname } = location;
    const { permission } = useSelector(state => getCurrentUser(state));
    
    const SideBarDataFilter = SideBarData.filter(
        item => item.permission.includes(permission) || item.permission.includes(permissionType.all)
    );
    
    return (
        <div className={Styles.MenuSideBar}>
            {SideBarDataFilter.map((item, index) =>
                <div key={index} className={clsx(Styles.MenuItem, {
                    [Styles.active]: pathname === item.path
                })}
                >
                    <Link className={Styles.href} to={item.path}>
                        <div className={Styles.icon}>
                            {item.icon}
                        </div>
                        <span className={Styles.ItemText}>{item.title}</span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MenuSideBar;