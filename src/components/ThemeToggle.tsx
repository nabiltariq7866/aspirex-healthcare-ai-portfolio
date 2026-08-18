import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </span>
      <span className="theme-toggle-label">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
