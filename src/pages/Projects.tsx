import React from 'react'
import styled from 'styled-components'
import { PageContainer as Main, ProjectPreview } from '../components'
import { fadeIn } from './styles'

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
    <Page>
      <Main>
        <ProjectPreview
          title='react-moving-text'
          description='A library for animated texts built with React and CSS Animation.'
          image='https://s2.loli.net/2022/04/19/BzroIbfMD4nYSwC.png'
          links={LinksReactMovingText}
        />
      </Main>
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: 120px;
  background-color: #e1f5fe;
  opacity: 0;
  visibility: hidden;
  animation: ${fadeIn} 0.5s ease 1 0.5s forwards;
  top: 0;
`
export default ProjectsPage
