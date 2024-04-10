import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "@/components/mode-toggle"
import { Dashboard } from "./pages/Login"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Dashboard />
    </ThemeProvider>  
  )
}

export default App
