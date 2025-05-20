import { Outlet } from "@tanstack/react-router"
import { AppHeader } from "./components/AppHeader"
import { Toaster } from 'sonner'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" expand={true} richColors closeButton />
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default App