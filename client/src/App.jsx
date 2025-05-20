import { Outlet } from "@tanstack/react-router"
import { AppHeader } from "./components/AppHeader"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default App