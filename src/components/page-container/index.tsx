import React, { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

interface PageContainerProps {
  index: number
  background: string
  fullHeight?: boolean
  children: ReactNode | ReactNode[]
}

export const PageContainer: React.FC<PageContainerProps> = ({
  index = 0,
  fullHeight = true,
  background,
  children,
}) => {
  return (
    <Page index={index} background={background}>
      <Main fullHeight={fullHeight}>{children}</Main>
    </Page>
  )
}

export const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`

const Page = styled.div<{ index: number; background: string }>`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: ${({ index }) => index * 60}px;
  background-color: ${({ background }) => background};
  opacity: 0;
  visibility: hidden;
  animation: ${fadeIn} 0.5s ease 1 0.5s forwards;
  top: 0;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Main = styled.div<{ fullHeight: boolean }>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  padding: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease 1 1s forwards;
`

export default PageContainer
