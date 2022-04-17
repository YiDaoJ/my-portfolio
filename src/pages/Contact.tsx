import { FaGithubAlt, FaCodepen, FaFacebookSquare, FaBloggerB } from "react-icons/fa";
import React from 'react'
import styled from 'styled-components'
import { StyledH2, IconLink, PageContainer, StyledH1, TabContainer } from "../components";

export const Contact: React.VFC = () => {
  return (
    <TabContainer color="#558b2f" index={4} label="Contact" >
    <PageContainer>
      <StyledH1>
        Let's talk!
      </StyledH1>

      <StyledEmail>
        <a href="mailto:jiang.chuxiao@gmail.com" target="_blank" rel="noreferrer">jiang.chuxiao@gmail.com</a>
      </StyledEmail>
      
      <StyledH2>Or find me on:</StyledH2>
				<ContactPanel>
					<IconLink linkURL="https://github.com/YiDaoJ" title="Github">
            <FaGithubAlt />				
					</IconLink>
					<IconLink linkURL="http://codepen.io/yidaoJ/" title="CodePen">
            <FaCodepen />
					</IconLink>
					<IconLink linkURL="https://www.facebook.com/chuxiao.jiang" title="FaceBook">
            <FaFacebookSquare />
					</IconLink> 
					<IconLink linkURL="https://yidaoj.github.io/" title="Personal Blog">
          <FaBloggerB />
					</IconLink>
				</ContactPanel>
    </PageContainer>
    </TabContainer>
  )
}


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
    color: #F5DB3B;
    text-decoration: none;
    transition: all 300ms ease;
  }

  a:visited {
    color: #F5DB3B;
  }

  a:hover {
    color: white;;
  }

`

export default Contact