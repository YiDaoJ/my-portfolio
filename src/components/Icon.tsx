import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IconProps {
  children: ReactElement;
  onClick?(): void;
}

export const Icon: React.FC<IconProps> = ({ children, onClick }) => {
  return <IconContainer onClick={onClick}>{children}</IconContainer>;
};

const IconContainer = styled.div`
  display: inline-block;
  font-size: 2.5rem;
  cursor: pointer;
  width: auto;
  height: auto;
  line-height: 0px;

  &:hover {
    color: #ef43a1;
    transition: all 600ms cubic-bezier(0.99, 0, 0.57, 0.94);
    transform: rotate(360deg);
  }

  svg {
    color: #fff;
  }
`;

export default Icon;
