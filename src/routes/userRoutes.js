import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProfile from '../pages/Users/EditProfile';
import UserList from '../pages/Users/UserList';
import { PATH } from '../constants/paths';

export default function UserRoutes() {
  return (
    <Switch>
      <Route path={PATH.EDIT_PROFILE} component={EditProfile} />
      <Route path={PATH.USERS} component={UserList} />
    </Switch>
  );
}
