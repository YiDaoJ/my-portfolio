import styled, { keyframes } from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #f1f8e9;
  text-shadow: 1px 3px #cddc39;
  font-weight: 500;
  letter-spacing: 0;
  margin-top: 0px;
`

export const RegularH1 = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 150%;
`

export const StyledH2 = styled.h2`
  /* color: #f1f8e9; */
  font-weight: 400;
  line-height: 150%;
`

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  font-family: 'Montserrat', sans-serif;
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

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
    animation: ${swing} 0.8s ease-in-out 1;
  }
`
