import React from 'react'
import { PageContainer, RegularH1, StyledH2 } from '../components'
import { AppTheme } from '../styles'

export const Home: React.FC = () => {
  return (
    <PageContainer index={0} background={AppTheme.colors['bg-home']}>
      <RegularH1>{`Hi, I'm Xiao`}</RegularH1>
      <StyledH2>Web Engineer, Front-End Addict.</StyledH2>
    </PageContainer>
  )
}

export default Home
