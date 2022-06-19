import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface IconLinkProps {
  children: ReactElement
  linkURL: string
  title?: string
}

export const IconLink: React.FC<IconLinkProps> = ({ children, linkURL, title }) => {
  return (
    <StyledIconLink href={linkURL} target='_blank' title={title}>
      {children}
    </StyledIconLink>
  )
}

const StyledIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2em;
  text-align: center;
  text-decoration: none;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6em;
  }

  &:hover {
    transition: all 600ms cubic-bezier(0.99, 0, 0.57, 0.94);
    transform: rotate(360deg);
  }

  svg {
    /* color: #f5db3b; */
    color: #ffba1f;
  }
`

export default IconLink
