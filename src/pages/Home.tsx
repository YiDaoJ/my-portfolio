import React from 'react'
import styled from 'styled-components'

export const Home: React.VFC = () => {
  return (

      <HomeContainer>
        homehomehomehome
      </HomeContainer>
  )
}

const HomeContainer = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  background-color: #e3f2fd;
  padding: 3rem;
  opacity: 1;
  /* position: absolute;
  z-index: 1000; */
`

export default Home