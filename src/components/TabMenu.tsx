import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = [
  {
    label: 'home',
    color: '#e3f2fd',
    path: '',
  },
  {
    label: 'about',
    color: '#f9fbe7',
    path: 'about',
  },
  {
    label: 'projects',
    color: '#fbe9e7',
    path: 'projects',
  },
  {
    label: 'contact',
    color: '#e8eaf6',
    path: 'contact',
  },
]

export const TabMenu: React.VFC = () => {
  return (
    <Nav className='navigation'>
      {Tabs.map((tab) => (
        <NavigationLink to={`/${tab.path}`} key={tab.label} color={tab.color}>
          {tab.label}
        </NavigationLink>
      ))}
    </Nav>
  )
}

// className={({ isActive }) =>
//   isActive ? "open" : undefined
// }
// className={clsx("nav-item", {open: index === store.currentIndex})}
// isSelected={index === store.currentIndex}
const Nav = styled.div`
  padding: 0;
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
`

const NavigationLink = styled(NavLink)<{ color: string }>`
  height: 100%;
  padding: 60px 5px;
  font-family: apercu mono, sans-serif;
  min-width: 60px;

  position: relative;
  will-change: width;
  cursor: pointer;
  transform: matrix(1, 0, 0, 1, 0, 0);
  background-color: ${(props) => props.color};
  transition: all 0.5s ease;
  width: 60px;
  &.active {
    width: 100%;
  }
`

export default TabMenu
