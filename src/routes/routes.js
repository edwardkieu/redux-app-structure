import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoginRoutes from './loginRoutes'
import HomeRoutes from './homeRoutes'
import UserRoutes from './userRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <LoginRoutes />
      <UserRoutes />
    </BrowserRouter>
  )
}