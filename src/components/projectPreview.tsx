import React, { ReactNode } from "react";
import styled from "styled-components";
import { TextLink } from "./textLink";

interface ProjectPreviewProps {
  title: string;
  description: string | ReactNode | ReactNode[];
  image: string;
  links?: { title: string; url: string }[];
}

export const ProjectPreview: React.VFC<ProjectPreviewProps> = ({
  title,
  description,
  image,
  links,
}) => {
  return (
    <PreviewContainer>
      <div className='space-placeholder'></div>

      <ImageContainer>
        <Img src={image} />
      </ImageContainer>

      <ContentContainer>
        <div className=''>
          <h3 className='project-preview__title'>{title}</h3>

          <div className='project-preview__description'>{description}</div>
        </div>

        <div className='project-preview__links'>
          {links?.map((link) => (
            <TextLink href={link.url} target='_blank' key={link.title}>
              <span>{link.title}</span>
            </TextLink>
          ))}
        </div>
      </ContentContainer>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #f7c815;
  width: 90%;
  max-width: 1080px;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);

  .space-placeholder {
    padding: 1.5rem;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.laptop_l}) {
      padding: 0.75rem;
    }

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
      display: none;
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  max-width: 300px;
  min-height: 300px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_l}) {
    max-width: 200px;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Img = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  max-width: 500px;
  object-fit: cover;
  aspect-ratio: 1/1;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_l}) {
    object-fit: contain;
  }
`;

const ContentContainer = styled.div`
  padding: 0.5rem 1.5rem 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .project-preview__links {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
  }

  .project-preview__title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.75rem;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
      margin-top: 0.5rem;
    }
  }

  .project-preview__description {
    font-size: 1.1rem;
    line-height: 150%;
    white-space: pre-wrap;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      margin: 0;
      padding: 0;
    }

    .paragraph_with_space {
      margin-top: 1rem;
    }
  }
`;
