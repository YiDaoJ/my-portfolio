import React from 'react'
import { Layout, PageContainer, TabContainer } from '../components'

export const Home: React.VFC = () => {
  return (
    <Layout>
      <TabContainer color="#0277bd" index={0} label="Home">
        <PageContainer>
          <div>
            Hi, I'm Xiao
          </div>
          <div>
            Web Engineer, Front End Addict.
          </div>
        </PageContainer>
      </TabContainer>
    </Layout>
  )
}

export default Home