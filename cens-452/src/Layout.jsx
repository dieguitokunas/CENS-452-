import { createRoot } from 'react-dom/client'
import './index.css'
import { Browser } from './router/Browser.jsx'
import { SidebarProvider } from './components/ui/sidebar.jsx'

createRoot(document.getElementById('root')).render(
    <SidebarProvider>
    <Browser />
    </SidebarProvider>
)
