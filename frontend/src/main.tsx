import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { applyThemeSettings, initializeThemeMode } from '@/utils/theme'
import './styles/globals.css'
import './styles/theme.css'
import './styles/studio.css'

initializeThemeMode()
applyThemeSettings()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
