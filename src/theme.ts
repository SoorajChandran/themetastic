const COLORS = {
  white: '#FFFFFF',
  black: '#444',
  gray: '#F8F8F9',
}

export interface Itheme {
  background: string
  body: string
}
const themeLight = {
  background: COLORS.gray,
  body: COLORS.black,
}

const themeDark = {
  background: COLORS.black,
  body: COLORS.white,
}

const getTheme = (mode: string): Itheme => (mode === 'dark' ? themeDark : themeLight)

export default getTheme
