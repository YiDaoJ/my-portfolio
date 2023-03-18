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
            <div>Hi, my name is Xiao.</div>
            <div>
              I am a front-end developer with over four years of experience in web development. I am
              currently based in Duesseldorf and specialize in building web applications using
              React.js, Vue.js and Typescript.
            </div>
            <div>
              I enjoy bringing UI and UX concepts to functional, user-friendly websites and strive
              to write clean and efficient code. But my passion doesn't stop here. I'm alwasys eager
              to dive deeper into web development, and stay curious about technologies. In my spare
              time, I learn new techs through online courses to keep my skills sharp. In addition, I
              am also very interested in cloud development and DevOps.
            </div>
          </StyledH2>
        </div>
        <div className='about-section'>
          <RegularH1>Skills</RegularH1>
          <SkillPointsContainer className='skills'>
            <SkillCard title='5+ years experience' skills={['HTML', 'CSS', 'Javascript']} />
            <SkillCard
              title='3+ years experience'
              skills={['React.js', 'Typescript', 'Node.js', 'Sass', 'Git']}
            />
            <SkillCard title='1 year experience' skills={['Vue.js', 'jQuery']} />
            <SkillCard
              title='Basic knowledge'
              skills={['Java', 'SQL', 'GraphQL', 'Docker', 'Kubernetes']}
            />
          </SkillPointsContainer>
        </div>
        <div className='about-section'>
          <RegularH1>Online Courses Certificates</RegularH1>
          <div className='about-section__links-container'>
            <TextLink href='certificate-k8s.pdf'>
              <span>Kubernetes for the Absolute Beginners</span>
            </TextLink>
            <TextLink href='certificate-gatsby.pdf'>
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
