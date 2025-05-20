import { Outlet } from "@tanstack/react-router"
import { AppHeader } from "./components/AppHeader"
import { Toaster } from 'sonner'
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="container mx-auto max-w-7xl min-h-screen flex flex-col">
      <Toaster position="top-right" expand={true} richColors closeButton />
      <AppHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App