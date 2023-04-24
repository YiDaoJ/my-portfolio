import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Navigation from "./nav";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer className='layout'>
      <Navigation />
      <>{children}</>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 100%;
`;
