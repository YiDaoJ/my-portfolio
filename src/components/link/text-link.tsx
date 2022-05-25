import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface TextLinkProps {
  children: string | ReactNode
  href: string
  target?: string
  rel?: string
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  target = '_blank',
  rel,
}) => (
  <StyledTextLink href={href} target={target} rel={rel}>
    {children}
  </StyledTextLink>
)

export const StyledTextLink = styled.a`
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
    border-radius: 6px;
    background: #f87171;
  }
  &:after {
    transition: 50ms ease-out;
    transform: scaleX(0);
    transform-origin: left center;
    bottom: -9px;
    right: -12px;
    border: 8px solid transparent;
    border-left-color: #ef4444;
  }
  &:hover {
    &:before {
      transition: 100ms ease-out;
      transform: scaleY(0.18);
      background: #ef4444;
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
