import React, { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

interface PageContainerProps extends PropsWithChildren<unknown> {
  index: number;
  background: string;
  fullHeight?: boolean;
  gap?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  index = 0,
  fullHeight = true,
  background,
  children,
  gap,
}) => {
  return (
    <Page index={index} background={background} className='page-container'>
      <Main fullHeight={fullHeight} gap={gap} className='main-content'>
        {children}
      </Main>
    </Page>
  );
};

export const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`;

const Page = styled.div<{ index: number; background: string }>`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: ${({ index }) => index * 60}px;
  background-color: ${({ background }) => background};
  opacity: 0;
  visibility: hidden;
  animation: ${fadeIn} 0.3s ease 1 0.4s forwards;
  top: 0;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    height: calc(100% - 180px);
    margin-left: 0;
    top: ${({ index }) => (index + 1) * 45}px;
    width: 100%;
  }
`;

export const Main = styled.div<{
  fullHeight: boolean;
  gap?: string;
}>`
  width: 100%;
  min-height: 100%;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};

  opacity: 0;
  animation: ${fadeIn} 0.3s ease 1 0.6s forwards;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_l}) {
    padding: 2rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_s}) {
    padding: 1rem;
  }
`;

export default PageContainer;
