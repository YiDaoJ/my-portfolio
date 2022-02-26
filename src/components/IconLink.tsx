import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface IconLinkProps {
  children: ReactElement
  linkURL: string
  title?: string
}

export const IconLink: React.FC<IconLinkProps> = ({ children, linkURL, title }) => {
  return (
    <StyledIconLink href={linkURL} target="_blank" title={title}>
      {children}		
    </StyledIconLink>
  )
}

const StyledIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
	width: 50px;
	height: 50px;
	/* background-color: #cddc39; */
	border-radius: 50%;
	font-size: 2em;
	text-align: center;
	text-decoration: none;

  /* &:hover {
    transition: border-radius .75s ease;
	  border-radius: 4px;

    
  } */

  &:hover{
      color: #ef43a1;
      transition: all 600ms cubic-bezier(.99,0,.57,.94);
      transform: rotate(360deg);
    }

  svg {
    color: #F5DB3B;
  }
`

export default IconLink