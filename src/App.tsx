import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from './ThemeContext'
import { ITheme } from './types'

/**
 * the any types here are because of
 * /** https://github.com/emotion-js/emotion/issues/1320
 * TODO: Fix this with work arounds mentioned in the issue
 */

const Wrapper: any = styled<'div', ITheme>('div')`
  background: ${props => (props.theme as any).background};
  width: 100vw;
  text-align: center;
  height: 100vh;
  h1 {
    color: ${props => (props.theme as any).body};
  }
`

const Title = styled.h1`
  margin: 0;
`

const ToggleButton = styled.button`
  margin: 0;
  border: 0;
  font-size: 80px;
  background: transparent;
  outline: none;
  cursor: pointer;
`

const App = () => {
  const themeState = useTheme()

  return (
    <Wrapper>
      <div>
        <Title>Click on the icon below</Title>
        <ToggleButton data-testid="toggle-button" onClick={() => themeState.toggleTheme()}>
          {themeState.isDark ? '☀️' : '🌑'}
        </ToggleButton>
      </div>
    </Wrapper>
  )
}

export default App
