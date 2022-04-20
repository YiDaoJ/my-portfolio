import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { BiLinkExternal } from 'react-icons/bi'
import { StyledLink } from './styled-components'

interface ProjectPreviewProps {
  title: string
  description: string
  image: string
  links?: { title: string; url: string }[]
}

export const ProjectPreview: React.VFC<ProjectPreviewProps> = ({
  title,
  description,
  image,
  links,
}) => {
  return (
    <PreviewContainer>
      <Img url={image} />
      <Content>
        <div className='project-preview__title'>{title}</div>
        <div className='project-preview__description'>{description}</div>
        {Boolean(links) && (
          <div className='project-preview__links'>
            {links?.map((link) => (
              <StyledLink href={link.url} target='_blank' key={link.title}>
                <span>{link.title}</span>
                <BiLinkExternal />
              </StyledLink>
            ))}
          </div>
        )}
      </Content>
    </PreviewContainer>
  )
}

const PreviewContainer = styled.div`
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Img = styled.div<{ url: string }>`
  width: 500px;
  height: 320px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 0 5px 12px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`

const Content = styled.div`
  width: 450px;
  height: auto;
  transform: translateY(-80px);
  background-color: #eb9d00;
  padding: 1rem;
  color: #f1f8e9;

  .project-preview__title {
    font-size: 1.5rem;
    font-weight: 500;

    display: flex;
    align-items: flex-end;
    padding-bottom: 1rem;
  }

  .project-preview__description {
    font-size: 1.1rem;
    line-height: 150%;
    white-space: pre-wrap;
  }

  .project-preview__links {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
  }
`
