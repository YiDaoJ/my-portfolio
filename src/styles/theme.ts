import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      backgroundColorHome: string
    }
  }
}

export const AppTheme: DefaultTheme = {
  colors: {
    primary: '#FFE000',
    backgroundColorHome: 'linear-gradient(to right, tomato 0%, gold 100%)',
  },
}
