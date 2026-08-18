import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

export type ThemeMode = 'light' | 'dark'

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const STORAGE_KEY = 'aspirex-portfolio-theme'
const DEFAULT_THEME: ThemeMode = 'dark'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function storedTheme(): ThemeMode | null {
  if (typeof window === 'undefined') return null

  const value = window.localStorage.getItem(STORAGE_KEY)

  return value === 'dark' || value === 'light'
    ? value
    : null
}

function resolveInitialTheme(): ThemeMode {
  return storedTheme() ?? DEFAULT_THEME
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement

  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export function ThemeProvider({
  children,
}: PropsWithChildren) {
  const [theme, setThemeState] =
    useState<ThemeMode>(resolveInitialTheme)

  useLayoutEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = useCallback(
    (next: ThemeMode) => {
      window.localStorage.setItem(
        STORAGE_KEY,
        next,
      )

      setThemeState(next)
    },
    [],
  )

  const toggleTheme = useCallback(() => {
    setTheme(
      theme === 'dark'
        ? 'light'
        : 'dark',
    )
  }, [setTheme, theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      'useTheme must be used inside ThemeProvider',
    )
  }

  return context
}

export const themeStorageKey = STORAGE_KEY
export const defaultTheme = DEFAULT_THEME
