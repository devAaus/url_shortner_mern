import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query'
import { Toaster } from './components/ui/sonner'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routes/routeTree'


const router = createRouter({ routeTree })

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <RouterProvider router={router} />
  </QueryClientProvider>
)
