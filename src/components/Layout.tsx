import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TabMenu from './TabMenu';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer className='layout'>
      <TabMenu />
      <Outlet />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 100%;
`;
