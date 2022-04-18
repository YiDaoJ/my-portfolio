import React from 'react'
import styled from 'styled-components'
import { PageContainer as Main } from '../components'
import { slideIn } from './styles'

export const Home: React.VFC = () => {
  return (
    <Page>
      <Main>homehomehomehome</Main>
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  background-color: #e3f2fd;
  padding: 3rem;
  animation: ${slideIn} 1s ease 1;
`

export default Home
