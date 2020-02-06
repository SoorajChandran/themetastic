import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import getTheme from './theme'

interface ThemeType {
  isDark: boolean
  hasThemeMounted: boolean
}

interface ContextType {
  isDark: boolean
  toggle: () => void
}

const defaultContextData: ContextType = {
  isDark: false,
  toggle: () => {},
}

const ThemeContext = createContext<ContextType>(defaultContextData)
const useTheme = () => React.useContext(ThemeContext)

const useDarkMode = (): [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>] => {
  const [themeState, setThemeState] = useState<ThemeType>({
    isDark: false,
    hasThemeMounted: false,
  })

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true'
    setThemeState({ ...themeState, isDark, hasThemeMounted: true })
  }, [themeState])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, setThemeState] = useDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  const toggle = () => {
    console.log('here')
    const isDark = !themeState.isDark
    localStorage.setItem('isDark', JSON.stringify(isDark))
    setThemeState({ ...themeState, isDark })
  }

  const computedTheme = themeState.isDark ? getTheme('dark') : getTheme('light')

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          isDark: themeState.isDark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
