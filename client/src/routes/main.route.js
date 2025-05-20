import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import HomePage from '@/pages/HomePage'
import { DashboardPage } from '@/pages/DashboardPage'
import { checkAuth } from '@/utils/helper'

export const homeRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/',
   component: HomePage
})

export const dashboardRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/dashboard',
   component: DashboardPage,
   beforeLoad: checkAuth
})