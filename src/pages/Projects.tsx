import React from 'react'
import { PageContainer, ProjectPreview } from '../components'

const LinksReactMovingText = [
  {
    title: 'Source Code',
    url: 'https://github.com/YiDaoJ/react-moving-text',
  },
  {
    title: 'Demo',
    url: 'https://yidaoj.github.io/react-moving-text/',
  },
]

export const ProjectsPage: React.VFC = () => {
  return (
    <PageContainer index={2} background='#e1f5fe'>
      <ProjectPreview
        title='react-moving-text'
        description='A library for animated texts built with React and CSS Animation.'
        image='https://s2.loli.net/2022/04/19/BzroIbfMD4nYSwC.png'
        links={LinksReactMovingText}
      />
    </PageContainer>
  )
}
export default ProjectsPage
