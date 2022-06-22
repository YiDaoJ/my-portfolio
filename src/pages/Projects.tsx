import React from 'react'
import styled from 'styled-components'
import { PageContainer, ProjectPreview } from '../components'
import { AppTheme } from '../styles'

export const ProjectsPage: React.FC = () => {
  return (
    <PageContainer index={2} background={AppTheme.colors['bg-projects']} fullHeight={false}>
      <FlexContainer>
        <ProjectPreview
          title='react-moving-text'
          description={
            <>
              <p>A library to make animated typography for web-applications built with react.</p>
              <p>The lib is implemented with React and CSS-Animation.</p>
              <p className='paragraph_with_space'>Other techs: webpack</p>
            </>
          }
          image='https://i.postimg.cc/m2dBhWys/img-react-moving-text.png'
          links={LinksReactMovingText}
        />
        <ProjectPreview
          title={`Slick's Slices`}
          description={
            <>
              <p>WesBos Course: Gatsby Master</p>
              <p>
                A website for a local pizza joint called Slick's Slices, built with React.js
                framework Gatsby.
              </p>
              <p className='paragraph_with_space'>
                Other techs: GraphQL, HeadlessCMS Sanity, Progressive Images
              </p>
            </>
          }
          image='https://res.cloudinary.com/wesbos/image/fetch/w_700,q_auto,f_auto/https://courses.wesbos.com/images/GAT/GAT-social-share.png'
          links={LinksGatsby}
        />
        <ProjectPreview
          title='Static Websites'
          description={
            <>
              <p>
                Static Websites for companies, built with React.js, Typescript and Headless CMS,
                whose data source from a REST API.
              </p>
              <p className='paragraph_with_space'>
                Other functions: subscription, mailing, responsive design, dark mode, etc.
              </p>
            </>
          }
          image='https://venturebeat.com/wp-content/uploads/2019/12/GettyImages-1156274375.jpg?fit=750%2C631&strip=all'
        />
        <ProjectPreview
          title='Effizienz-Netzwerk der Stadtwerke'
          description={
            <>
              <p>
                Multi Web-Apps for municipal utilities, such as Cross-Selling-Applikation to offer
                products and services to private customers (end users), and evaluator-app to help
                their customers to have a solar system with which they can supply themselves, and so
                on.
              </p>
              <br />
              <p>
                Individualization and customization of these Web-Apps can be realised through
                various tools at its disposal to adapt content and appearance to its CI and product
                portfolio.
              </p>
            </>
          }
          image='https://venturebeat.com/wp-content/uploads/2019/12/GettyImages-1156274375.jpg?fit=750%2C631&strip=all'
        />
        <ProjectPreview
          title='Realtime Messaging Web-App'
          description={
            <p>
              Realtime Messaging Web-App for agent-user to kommunicate with customers using mobile
              messaging apps. The Web-App is built with React.js, Typescript and runs in
              Microfrontend architechture and event-driven APIs.
            </p>
          }
          image='https://venturebeat.com/wp-content/uploads/2019/12/GettyImages-1156274375.jpg?fit=750%2C631&strip=all'
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

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`

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

const LinksGatsby = [
  {
    title: 'Source Code',
    url: 'https://github.com/YiDaoJ/slicks-slices',
  },
]

export default ProjectsPage
