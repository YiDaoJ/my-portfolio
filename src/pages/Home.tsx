import React from 'react'
import styled from 'styled-components'
import { PageContainer as Main, RegularH1, StyledH2 } from '../components'
import { slideIn } from './styles'

export const Home: React.VFC = () => {
  return (
    <Page>
      <Main>
        <RegularH1>{`Hi, I'm Xiao`}</RegularH1>
        <StyledH2>Web Engineer, Front End Addict.</StyledH2>
      </Main>
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  background-color: #ffc93c;
  padding: 3rem;
  animation: ${slideIn} 1.5s ease 1;
`

export default Home
