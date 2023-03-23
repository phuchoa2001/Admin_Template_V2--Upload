import React from 'react';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import { permission as permissionType } from '../../constants/permission';
import { getCurrentUser } from '../../redux/authSlice';
import routes from '../../routes/index';
function ManiDash(props) {
  const { permission } = useSelector(state => getCurrentUser(state));

  const routesFilter = routes.filter(
    item => item.permission.includes(permission) || item.permission.includes(permissionType.all)
);
  const showRouter = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.mani}
          />
        )
      })
    }
    return result;
  }
  return (
    <>
      <Switch>
        {showRouter(routesFilter)}
      </Switch>
    </>
  );
}

export default ManiDash;