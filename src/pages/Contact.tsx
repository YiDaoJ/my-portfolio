import { FaGithubAlt, FaCodepen, FaFacebookSquare, FaBloggerB } from "react-icons/fa";
import React from 'react'
import styled from 'styled-components'
import { StyledH2, IconLink, PageContainer, StyledH1 } from "../components";

export const Contact: React.VFC = () => {
  return (
    <PageContainer>
      <StyledH1>
        Contact Me!
      </StyledH1>

      <StyledEmail>
        {`Email:\n\n`}
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
  )
}


const ContactPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`

const StyledEmail = styled.p`
  text-align: center;
	font-size: 20px;
	color: #D2FCF1;

  a:link {
    color: #F5DB3B;
    font-weight: bold;
    text-decoration: none;
  }

  a:visited {
    color: #F5DB3B;
  }

  a:hover {
    color: #325F55;
  }

`

export default Contact