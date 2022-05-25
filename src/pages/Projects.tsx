import React from 'react'
import styled from 'styled-components'
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

const LinksWebsites = [
  {
    title: 'Website 1',
    url: 'https://www.42ds.com/',
  },
  {
    title: 'Website 2',
    url: 'https://www.beyonddialog.com/',
  },
]

export const ProjectsPage: React.VFC = () => {
  return (
    <PageContainer index={2} background='#EF4444' fullHeight={false}>
      <FlexContainer>
        <ProjectPreview
          title='react-moving-text'
          description={
            <>
              <p>
                A library to make animated typography for web-applications built
                with react.
              </p>
              <p>The lib is implemented with React and CSS-Animation.</p>
              <p className='paragraph_with_space'>Other used techs: webpack</p>
            </>
          }
          image='https://s2.loli.net/2022/04/19/BzroIbfMD4nYSwC.png'
          links={LinksReactMovingText}
        />
        <ProjectPreview
          title='static websites'
          description='static websites are built with react and typescript, whose contents store in headless CMS strapi. Communication between front-end and back-end is via REST-Api realised.'
          image='https://s2.loli.net/2022/05/26/dSDaP4kAGoITtsQ.png'
          links={LinksWebsites}
        />
        <ProjectPreview
          title='Single-Page-Applications for municipal utility efficiency network '
          description='static websites are built with react and typescript, whose contents store in headless CMS strapi. Communication between front-end and back-end is via REST-Api realised.'
          image='https://www.42ds.com/api/uploads/42ds_evu_cloud_ddebe46555.png'
          links={LinksWebsites}
        />
      </FlexContainer>
    </PageContainer>
  )
}

const FlexContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: flex-start;
  align-items: flex-start;
`

export default ProjectsPage
