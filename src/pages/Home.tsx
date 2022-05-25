import React from 'react'
import { PageContainer, RegularH1, StyledH2 } from '../components'

export const Home: React.VFC = () => {
  return (
    <PageContainer index={0} background='#ffc93c'>
      <RegularH1>{`Hi, I'm Xiao`}</RegularH1>
      <StyledH2>Web Engineer, Front End Addict.</StyledH2>
    </PageContainer>
  )
}

export default Home
