import React from 'react'
import styled from 'styled-components'
import { PageContainer, SkillCard, RegularH1, StyledH2 } from '../components'

export const About: React.FC = () => {
  return (
    <PageContainer index={1} background='#DCFCE7' fullHeight={false}>
      <Sections>
        <div className='about-section'>
          <RegularH1>Intro.</RegularH1>
          <StyledH2>
            <p>Hi, my name ist Chuxiao Jiang. </p>
            <p>
              I am a front-end developer with 4+ years of experience in web
              development, based in Duesseldorf. At the moment, I specialize in
              building web applications written in React, Typescript, and
              Node.js.
            </p>
            <p>
              I enjoy bringing UI and UX concepts to reality and am passionate
              about clean and efficient code. I aim is to dive deeper into web
              development, and keep curiosity for new techs as well. So in my
              spare time, I learn new techs through online courses besides
              enhancing current skills.
            </p>
          </StyledH2>
        </div>
        <div className='about-section'>
          <RegularH1>Skills.</RegularH1>
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
        </div>
        <div className='about-section'>
          <RegularH1>Online Courses Certificates</RegularH1>
        </div>
      </Sections>
    </PageContainer>
  )
}

const SkillPointsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
`

const Sections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  .about-section {
    width: 80%;
    justify-self: center;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

{
  /* <StyledH2>
        Hi, My Name ist Chuxiao Jiang. <br />
        I am a front-end developer with 4+ years of experience in
        web-development, based in Duesseldorf.
        <br />
        At the moment, I implement projects mainly written with ReactJS,
        Typescript and NodeJs.
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
      </StyledH2> */
}
