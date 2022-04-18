import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface TabStyleProps {
  color: string
  index: number
  isSelected: boolean
}

interface TabProps extends TabStyleProps {
  label: string
  onClick(): void
}

export const Tab: React.VFC<TabProps> = ({
  label,
  color,
  index,
  onClick,
  isSelected,
}: TabProps) => {
  const link = label === 'home' ? '' : label

  return (
    <Link to={`/${link}`} className={`link-${label}`}>
      <StyledTab
        color={color}
        index={index}
        onClick={onClick}
        isSelected={isSelected}
        className={`tab-${label}`}
      >
        {label}
      </StyledTab>
    </Link>
  )
}

const StyledTab = styled.div<TabStyleProps>`
  height: 70px;
  /* width: 60px; */
  /* position: absolute;
  top: 0; */
  /* left: 100%; */
  /* left:0; */
  /* right: ${(props) => `calc(20px - ${props.index * 2}px)`}; */
  padding: 8px;

  background: ${(props) => props.color};
  color: #fafafa;

  /* border-top-right-radius: 20px;
  border-bottom-right-radius: 20px; */

  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  /* margin-top: ${(props) => props.index * 20}vh; */

  text-orientation: none;
  font-size: 2rem;
  z-index: ${(props) => (props.isSelected ? 200 : 0)};

  cursor: pointer;
`

export default Tab
