import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../nav'

export const Layout: React.FC = () => {
  return (
    <LayoutContainer className='layout'>
      <Navigation />
      <Outlet />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  height: 100%;
  color: #1e293b;
`
