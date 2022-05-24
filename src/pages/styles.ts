import { keyframes } from 'styled-components'

export const slideIn = keyframes`
  from {
    top: 100%;
  }

  to {
    top: 0;
  }
`

export const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`
