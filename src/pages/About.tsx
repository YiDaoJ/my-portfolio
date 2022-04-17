import React from 'react'
import { PageContainer, StyledH2, TabContainer } from '../components'

export const About: React.FC = () => {
  return (
    <TabContainer color="#00838f" index={1} label="About" >
      <PageContainer>
        <StyledH2>
        Hi,
        My Name ist Chuxiao Jiang. <br />
        I'm a front-end developer with 3+ years of professional experience, based in Duesseldorf.<br />
        At the moment, I implement project written with ReactJS, Typescript, NodeJs.<br />
        My aim is to become a fullstack developer.<br />
        In my free time, I try to dive deeper in web-development, also learn new technologies in dev-op like kubernetes.
        </StyledH2>
      </PageContainer>
    </TabContainer>
  )
}