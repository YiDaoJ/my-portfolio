import React from 'react'
import styled from 'styled-components'
import { PageContainer, SkillCard, StyledH2 } from '../components'

export const About: React.FC = () => {
  return (
    <PageContainer index={1} background='#14B8A6'>
      <StyledH2>
        Hi, My Name ist Chuxiao Jiang. <br />
        I am a front-end developer with 4+ years of experience in
        web-development, based in Duesseldorf.
        <br />
        At the moment, I implement projects written with ReactJS, Typescript and
        NodeJs.
        <br />
        My aim is to become a fullstack developer.
        <br />
        In my free time, I try to dive deeper in web-development, also learn new
        technologies in dev-op like kubernetes.
      </StyledH2>

      <StyledH2>
        I have started frontend development, since I was a student.
        <br />
        For about 4 years, I have acquired valuable experience, and still
        constantly enhance my skills and dive deeper, using the following tools.
      </StyledH2>
      <SkillPointsContainer className='skills'>
        <SkillCard
          title='5+ years experience'
          skills={['HTML', 'CSS', 'Javascript']}
        />
        <SkillCard
          title='3+ years experience'
          skills={['React', 'Typescript', 'NodeJS', 'Git']}
        />
        <SkillCard
          title='1+ years experience'
          skills={['SASS', 'Java', 'jQuery']}
        />
        <SkillCard
          title='Basic knowledge'
          skills={['SQL', 'GraphQL', 'Docker', 'Kubernetes']}
        />
      </SkillPointsContainer>
    </PageContainer>
  )
}

const SkillPointsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
`
