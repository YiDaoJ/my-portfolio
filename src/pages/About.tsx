import React from 'react'
import styled from 'styled-components'
import { slideIn } from './styles'


export const About: React.FC = () => {
  return (
    <AboutContainer>
      About
    </AboutContainer>
  )
}


const AboutContainer = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: 60px;
  background-color: #f9fbe7;
  animation: ${slideIn} 1s ease 1;
`