import App from "@/App"
import { createRootRoute } from "@tanstack/react-router"
import { loginRoute, registerRoute } from "./auth.route"
import { dashboardRoute, homeRoute } from "./main.route"

export const rootRoute = createRootRoute({
   component: App
})

export const routeTree = rootRoute.addChildren([
   homeRoute,
   dashboardRoute,
   loginRoute,
   registerRoute
])