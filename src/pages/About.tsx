import React from 'react'
import styled from 'styled-components'
import { PageContainer, StyledH2 } from '../components'

export const About: React.FC = () => {
  return (
    <PageContainer index={1} background='#aacc00'>
      <StyledH2>
        Hi, My Name ist Chuxiao Jiang. <br />
        I am a front-end developer with 3+ years of professional experience,
        based in Duesseldorf.
        <br />
        At the moment, I implement projects written with ReactJS, Typescript,
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
        <div>HTML5</div>
        <div>CSS 3</div>
        <div>Sass</div>
        <div>Javascript</div>
        <div>jQuery</div>
        <div>React</div>
        <div>Typescript</div>
        <div>Next Js</div>
        <div>gatsby</div>
        <div>Git</div>
        <div>graphql</div>
        <div>kubernetes</div>
      </SkillPointsContainer>
    </PageContainer>
  )
}

const SkillPointsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2rem 0;
  font-size: 1.2rem;

  div {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
`
