import React from 'react'
import styled from 'styled-components'
import { slideIn } from './styles'

export const ProjectsPage: React.VFC = () => {
  return (
    <ProjectsContainer>
      Projects
    </ProjectsContainer>
  )
}


const ProjectsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: 120px;
  background-color: #fbe9e7;
  animation: ${slideIn} 1s ease 1;
`

export default ProjectsPage