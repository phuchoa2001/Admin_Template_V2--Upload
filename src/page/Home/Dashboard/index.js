import React from 'react';

import ListOrder from './ListOrder';
import ListCard from './ListCard/ListCard';
function Dashboard(props) {
    return (
        <>
            <h1 className="heading-text--large" >Dashboard</h1>
            <ListCard />
            <h3 className="heading-text">Tài Khoản</h3>
            <ListOrder />
        </>
    );
}
export default Dashboard;