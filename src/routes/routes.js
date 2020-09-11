import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoginRoutes from './loginRoutes'
import HomeRoutes from './homeRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <LoginRoutes />
    </BrowserRouter>
  )
}