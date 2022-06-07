import React from 'react'
import styled from 'styled-components'
import {
  FaGithubAlt,
  FaCodepen,
  FaFacebookSquare,
  FaBloggerB,
  FaLinkedinIn,
} from 'react-icons/fa'
import { IconLink, PageContainer, RegularH1, TextLink } from '../components'
import { AppTheme } from '../styles'

export const Contact: React.VFC = () => {
  return (
    <PageContainer index={3} background={AppTheme.colors['bg-contact']}>
      <Img url='https://lh3.googleusercontent.com/fVj7DhChjs7SN1-23-u7TDarNT2hP9m7GWb6LQM_-55HjJhIU_ZyQSdYYfg7oVGJnmH0QnIQfEfedcOq__YUjAYJvrmE--CgqCp48Z6gvUwQV0uxTcjcB3YGlHFfpJKrWP8YWDu_fg=w2400' />
      <RegularH1 color={AppTheme.colors['font-light']}>
        Let&apos;s talk!
      </RegularH1>

      <TextLink
        href='mailto:jiang.chuxiao@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        jiang.chuxiao@gmail.com
      </TextLink>

      <SubTitle>Or find me on:</SubTitle>
      <ContactPanel>
        <IconLink linkURL='https://github.com/YiDaoJ' title='Github'>
          <FaGithubAlt />
        </IconLink>
        <IconLink
          linkURL='https://www.linkedin.com/in/chuxiao-jiang-406b0b239/'
          title='LinkedIn'
        >
          <FaLinkedinIn />
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
  color: ${({ theme }) => theme.colors['font-light']};
  font-weight: 300;
  letter-spacing: 0;
  margin-bottom: 2rem;
`

const ContactPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const Img = styled.div<{ url: string }>`
  width: 400px;
  height: 600px;
  /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 0 5px 12px rgba(0, 0, 0, 0.2); */
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
`

export default Contact
