import React from 'react'
import AuthenticatedGuard from './../guards/authenticatedGuard'
import Home from './../pages/Home'
import { Switch } from 'react-router-dom'
import { PATH } from './../constants/paths'

export default function HomeRoutes() {
    return (
      <Switch>
        <AuthenticatedGuard exact path={PATH.HOME} component={Home} />
      </Switch>
    )
  }