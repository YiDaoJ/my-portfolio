import React from 'react'
import styled from 'styled-components'
import {
  FaGithubAlt,
  FaCodepen,
  FaFacebookSquare,
  FaBloggerB,
} from 'react-icons/fa'
import { IconLink, PageContainer, StyledH1, StyledLink } from '../components'

export const Contact: React.VFC = () => {
  return (
    <PageContainer index={3} background='#64b5f6'>
      <StyledH1>Let&apos;s talk!</StyledH1>

      <StyledEmail>
        <StyledLink
          href='mailto:jiang.chuxiao@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          jiang.chuxiao@gmail.com
        </StyledLink>
      </StyledEmail>

      <SubTitle>Or find me on:</SubTitle>
      <ContactPanel>
        <IconLink linkURL='https://github.com/YiDaoJ' title='Github'>
          <FaGithubAlt />
        </IconLink>
        <IconLink linkURL='http://codepen.io/yidaoJ/' title='CodePen'>
          <FaCodepen />
        </IconLink>
        <IconLink
          linkURL='https://www.facebook.com/chuxiao.jiang'
          title='FaceBook'
        >
          <FaFacebookSquare />
        </IconLink>
        <IconLink linkURL='https://yidaoj.github.io/' title='Personal Blog'>
          <FaBloggerB />
        </IconLink>
      </ContactPanel>
    </PageContainer>
  )
}

const SubTitle = styled.div`
  font-size: 2rem;
  color: #f1f8e9;
  text-shadow: 1px 1px #cddc39;
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 2rem;
`

const ContactPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
`

const StyledEmail = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  font-weight: 400;
  color: #f1f8e9;
`

export default Contact
