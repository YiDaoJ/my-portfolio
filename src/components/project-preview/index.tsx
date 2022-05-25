import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { TextLink } from '../link/text-link'

interface ProjectPreviewProps {
  title: string
  description: string | ReactNode | ReactNode[]
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
              <TextLink href={link.url} target='_blank' key={link.title}>
                <span>{link.title}</span>
                {/* <BiLinkExternal /> */}
              </TextLink>
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
  border-radius: 8px;
`

const Content = styled.div`
  width: 50vw;
  height: auto;
  background-color: #fcd34d;
  padding: 1.5rem 2rem;
  color: #18181b;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  border-radius: 8px;

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

    p {
      margin: 0;
    }

    .paragraph_with_space {
      margin-top: 1rem;
    }
  }

  .project-preview__links {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
  }
`
