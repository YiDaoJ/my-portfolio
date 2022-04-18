import styled from 'styled-components'
import { PageContainer, StyledH2 } from '../components'
import React from './Contact'

export const SkillPage: React.VFC = () => {
  return (
    <div>
      <PageContainer>
        <StyledH2>
          {`I've started frontend development, since I was a student.
          <br />
          For about 4 years, I have acquired valuable experience, and still
          constantly enhance my skills and dive deeper, using the following
          tools.`}
        </StyledH2>
        <SkillPointsContainer>
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
    </div>
  )
}

const SkillPointsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;

  div {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
`
