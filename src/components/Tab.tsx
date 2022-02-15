import React from 'react'
import styled from 'styled-components'

interface TabStyleProps {
  color: string
  index: number
}


interface TabProps extends TabStyleProps {
  label: string,
  onClick(): void 
}

export const Tab: React.VFC<TabProps> = ({ label, color, index, onClick }) => {
  return (
    <StyledTab color={color} index={index} onClick={onClick}>
      {label}
    </StyledTab>
  )
}

const StyledTab = styled.div<TabStyleProps>`

  position: absolute;
  top: 0;
  left: 100%;

  background: ${props => props.color};
  height: 20vh;
  width: 60px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.index * 20}vh;

  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 2rem;

  cursor: pointer;


`


export default Tab