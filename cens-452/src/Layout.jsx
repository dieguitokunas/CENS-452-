import { createRoot } from 'react-dom/client'
import './index.css'
import { Browser } from './router/Browser.jsx'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.jsx'

createRoot(document.getElementById('root')).render(
    <SidebarProvider className=''>
    <Browser />
    </SidebarProvider>
)
