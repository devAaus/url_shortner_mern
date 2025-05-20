import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routes/routeTree'
import { Provider } from 'react-redux'
import store from './store/store'


const router = createRouter({ routeTree })

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
)
