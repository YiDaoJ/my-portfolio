import styled, { keyframes } from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f1f8e9;
  /* text-shadow: 1px 3px #cddc39; */
  font-weight: 500;
  letter-spacing: 0;
  margin-top: 0px;
`

export const RegularH1 = styled.h1<{ color?: string }>`
  color: ${({ color, theme }) => color || theme.colors.font};
  font-size: 3rem;
  font-weight: 300;
  line-height: 150%;
  margin: 2rem 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.laptop_s}) {
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }
`

export const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  margin: 0;

  &.h2-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.laptop_s}) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`

const swing = keyframes`
  0% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
  20% {
    transform: rotateZ(15deg);
    transform-origin: center top;
  }
  40% {
    transform: rotateZ(-15deg);
    transform-origin: center top;
  }
  60% {
    transform: rotateZ(7deg);
    transform-origin: center top;
  }
  80% {
    transform: rotateZ(-7deg);
    transform-origin: center top;
  }
  100% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
`
