import { keyframes } from 'styled-components'

export const slideIn = keyframes`
  from {
    top: 100%;
    visibility: hidden;
    opacity: 0;
  }

  to {
    top: 0;
    visibility: visible;
    opacity: 1;
  }
`
