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
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
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

export const TextLink = styled.a`
  display: inline-block;
  position: relative;
  color: #343434;
  text-decoration: none;
  padding: 0 6px;
  &:before,
  &:after {
    will-change: transform;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  &:before {
    transition: 100ms ease-out 50ms;
    transform-origin: 0 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c1d9f4;
  }
  &:after {
    transition: 50ms ease-out;
    transform: scaleX(0);
    transform-origin: left center;
    bottom: -9px;
    right: -12px;
    border: 8px solid transparent;
    border-left-color: #91c0f7;
  }
  &:hover {
    &:before {
      transition: 100ms ease-out;
      transform: scaleY(0.18);
      background: #91c0f7;
    }
    &:after {
      transition: 50ms ease-out 100ms;
      transform: none;
    }
  }
  /* &:active {
    &:before {
      transition: 100ms ease-in;
      background: mix(#f1f1f1, #0077ff, 40%);
    }
    &:after {
      transition: 100ms ease-in;
      border-left-color: mix(#f1f1f1, #0077ff, 40%);
    }
  } */
`
