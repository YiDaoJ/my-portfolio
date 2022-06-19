import { DefaultTheme } from 'styled-components'

const sizes = {
  mobile: '425px',
  tablet: '820px',
  laptop_s: '1024px',
  laptop_l: '1440px',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      font: string
      'font-light': string
      'bg-home': string
      'bg-about': string
      'bg-contact': string
      'bg-projects': string
      'bg-card': string
      'bg-card-divider': string
      nav: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      laptop_s: string
      laptop_l: string
    }
  }
}

export const AppTheme: DefaultTheme = {
  colors: {
    font: '#1d3342',
    'font-light': '#f1f8e9',
    'bg-home': '#FFC93C',
    'bg-about': '#f7fef8',
    'bg-projects': '#EF4444',
    'bg-contact': '#0d54af',
    'bg-card': '#b1e179',
    'bg-card-divider': '#dfe7d2',
    nav: '#212121',
  },
  breakpoints: {
    mobile: sizes.mobile,
    tablet: sizes.tablet,
    laptop_s: sizes.laptop_s,
    laptop_l: sizes.laptop_l,
  },
}
