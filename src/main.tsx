import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import {
  ThemeProvider,
  defaultTheme,
  themeStorageKey,
  type ThemeMode,
} from './components/ThemeProvider'
import './styles/global.css'

function resolveInitialTheme(): ThemeMode {
  const saved =
    window.localStorage.getItem(
      themeStorageKey,
    )

  if (
    saved === 'light' ||
    saved === 'dark'
  ) {
    return saved
  }

  return defaultTheme
}

const initialTheme =
  resolveInitialTheme()

document.documentElement.classList.toggle(
  'dark',
  initialTheme === 'dark',
)

document.documentElement.dataset.theme =
  initialTheme

document.documentElement.style.colorScheme =
  initialTheme

if (
  'scrollRestoration' in
  window.history
) {
  window.history.scrollRestoration =
    'manual'
}

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
