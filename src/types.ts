// TODO: Find a better variable name  for ThemeType
export interface ThemeType {
  isDark: boolean
  hasThemeMounted: boolean
}

export interface IContext {
  isDark: boolean
  toggleTheme: () => void
}

export interface ITheme {
  background: string
  body: string
}
