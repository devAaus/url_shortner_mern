import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

export const loginRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/login',
   component: LoginPage,
})

export const registerRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/register',
   component: RegisterPage,
})