import React from 'react'
import styled from 'styled-components'
import { PageContainer, SkillCard, RegularH1, StyledH2, TextLink } from '../components'
import { AppTheme } from '../styles'

export const About: React.FC = () => {
  return (
    <PageContainer index={1} background={AppTheme.colors['bg-about']} fullHeight={false}>
      <Sections>
        <div className='about-section'>
          <RegularH1>About me</RegularH1>
          <StyledH2 className='h2-flex'>
            <div>Hi, my name is Chuxiao Jiang. </div>
            <div>
              I am a front-end developer with 4+ years of experience in web development, based in
              Duesseldorf. At the moment, I specialize in building web applications written in
              React, Typescript, and Node.js.
            </div>
            <div>
              I enjoy bringing UI and UX concepts to reality and am passionate about clean and
              efficient code. My aim is to dive deeper into web development, and keep curiosity for
              new techs as well. So in my spare time, I learn new techs through online courses
              besides enhancing current skills.
            </div>
          </StyledH2>
        </div>
        <div className='about-section'>
          <RegularH1>Skills</RegularH1>
          <SkillPointsContainer className='skills'>
            <SkillCard title='5+ years experience' skills={['HTML', 'CSS', 'Javascript']} />
            <SkillCard
              title='3+ years experience'
              skills={['React', 'Typescript', 'NodeJS', 'Git']}
            />
            <SkillCard title='1+ years experience' skills={['Sass', 'jQuery']} />
            <SkillCard
              title='Basic knowledge'
              skills={['Java', 'SQL', 'GraphQL', 'Docker', 'Kubernetes']}
            />
          </SkillPointsContainer>
        </div>
        <div className='about-section'>
          <RegularH1>Online Courses Certificates</RegularH1>
          <div className='about-section__links-container'>
            <TextLink href=''>
              <span>Kubernetes for the Absolute Beginners</span>
            </TextLink>
            <TextLink href='../../public/certificate-gatsby.pdf'>
              <span>Master Gatsby</span>
            </TextLink>
          </div>
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

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.laptop_l}) {
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.laptop_s}) {
    width: 100%;
  }
`

const Sections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.laptop_s}) {
    gap: 3rem;
  }

  .about-section {
    width: 80%;
    justify-self: center;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    .about-section__links-container {
      font-size: 1.3rem;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      a {
        text-align: center;
      }

      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }
`
