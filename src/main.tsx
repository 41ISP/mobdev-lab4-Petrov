import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './app/router/router'
import { useThemeStore } from './shared/store/themeStore'

const currentTheme = useThemeStore.getState().theme
document.body.className = currentTheme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
