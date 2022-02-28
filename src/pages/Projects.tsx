import React from 'react'
import styled from 'styled-components'
import { Card } from '../components'



export const ProjectsPage: React.VFC = () => {
  return (
    <ProjectsContainer>
      <Card 
        title="Effizienz-Netzwerk der Stadtwerke" 
        imgURL='https://s2.loli.net/2022/03/01/6IsYtPBRc1wjzu3.png' 
        color="#fb8500" 
      /> 
      <Card 
        title="HomePage" 
        imgURL='https://s2.loli.net/2022/03/01/E368giqVOQzLAst.png' 
        color="#003049" 
        />
      <Card 
        title="React-Moving-Text" 
        imgURL='https://s2.loli.net/2022/03/01/rGThmV1aAOLtZcq.png' 
        color="#155d27"
      />
      <Card 
        title="Fontend of real-time chat system" 
        imgURL='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg' 
        color="#d7263d" 
      />
      <Card 
        title="Selling Pizza" 
        imgURL='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg' 
        color="#ffb600" 
      />
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  font-family: 'Montserrat',sans-serif;
  align-items: center;
  justify-content: center;
`

export default ProjectsPage