import React from 'react'
import { Card, PageContainer } from '../components'



export const ProjectsPage: React.VFC = () => {
  return (
    <PageContainer>
      <Card title="Hey now, you're a rock star" imgURL='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg' />
    </PageContainer>
  )
}

export default ProjectsPage