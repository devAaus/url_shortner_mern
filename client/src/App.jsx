import { Outlet } from "@tanstack/react-router"
import { AppHeader } from "./components/AppHeader"
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default App