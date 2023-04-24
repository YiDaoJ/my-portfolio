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
    'bg-home': '#F7FBFC',
    'bg-about': '#D6E6F2',
    'bg-projects': '#B9D7EA',
    // 'bg-contact': '#0d54af',
    'bg-contact': '#769FCD',
    'bg-card': '#F7C815',
    'bg-card-divider': '#769FCD',
    nav: '#212121',
  },
  breakpoints: {
    mobile: sizes.mobile,
    tablet: sizes.tablet,
    laptop_s: sizes.laptop_s,
    laptop_l: sizes.laptop_l,
  },
}
