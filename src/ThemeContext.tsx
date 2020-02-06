import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import getTheme from './theme'

import { IContext, ThemeType } from './types'

const defaultContextData: IContext = {
  isDark: false,
  toggleTheme: () => {},
}

const ThemeContext = createContext<IContext>(defaultContextData)
const useTheme = () => React.useContext(ThemeContext)

/**
 * A custom hook to check the local storage and update the states with the current theme
 */
const useDarkMode = (): [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>] => {
  const [themeState, setThemeState] = useState<ThemeType>({
    isDark: false,
    hasThemeMounted: false,
  })

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true'
    setThemeState({ ...themeState, isDark, hasThemeMounted: true })
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, setThemeState] = useDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  /**
   * Switches the current theme and updates the local storage and state. DUH!
   */
  const toggleTheme = () => {
    const isDark = !themeState.isDark
    localStorage.setItem('isDark', JSON.stringify(isDark))
    setThemeState({ ...themeState, isDark })
  }

  const theme = themeState.isDark ? getTheme('dark') : getTheme('light')

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          isDark: themeState.isDark,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
