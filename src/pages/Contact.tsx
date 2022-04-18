import React from 'react'
import styled from 'styled-components'
import {
  FaGithubAlt,
  FaCodepen,
  FaFacebookSquare,
  FaBloggerB,
} from 'react-icons/fa'
import {
  IconLink,
  PageContainer as Main,
  StyledH1,
  StyledH2,
} from '../components'
import { slideIn } from './styles'

export const Contact: React.VFC = () => {
  return (
    <Page>
      <Main>
        <StyledH1>Let&apos;s talk!</StyledH1>

        <StyledEmail>
          <a
            href='mailto:jiang.chuxiao@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            jiang.chuxiao@gmail.com
          </a>
        </StyledEmail>

        <StyledH2>Or find me on:</StyledH2>
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
      </Main>
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: 180px;
  background-color: #e8eaf6;
  animation: ${slideIn} 1s ease 1;
`

const ContactPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`

const StyledEmail = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  font-weight: 400;

  a:link {
    color: #f5db3b;
    text-decoration: none;
    transition: all 300ms ease;
  }

  a:visited {
    color: #f5db3b;
  }

  a:hover {
    color: white;
  }
`

export default Contact
