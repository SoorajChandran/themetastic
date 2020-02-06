import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from './ThemeContextProvider'
import { Itheme } from './theme'

/**
 * the any types here are because of
 * /** https://github.com/emotion-js/emotion/issues/1320
 * TODO: Fix this with work arounds mentioned in the issue
 */

const Wrapper: any = styled<'div', Itheme>('div')`
  background: ${props => (props.theme as any).background};
  width: 100vw;
  height: 100vh;
  h1 {
    color: ${props => (props.theme as any).body};
  }
`

const App = () => {
  const themeState = useTheme()
  return (
    <Wrapper>
      <div>
        <button data-testid="toggle-button" onClick={() => themeState.toggle()}>
          Clickety click{themeState.isDark ? '☀️' : '🌑'}
        </button>
      </div>
    </Wrapper>
  )
}

export default App
