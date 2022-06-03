import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SiAboutdotme } from 'react-icons/si'
import { GrContactInfo } from 'react-icons/gr'
import { BiCollection, BiHomeSmile } from 'react-icons/bi'

export const Navigation: React.FC = () => {
  return (
    <Nav className='navigation'>
      {Tabs.map((tab) => (
        <NavigationLink to={`/${tab.path}`} key={tab.label} color={tab.color}>
          <span className='nav-icon'>{tab.icon}</span>
          <span className='nav-text'>{tab.label}</span>
        </NavigationLink>
      ))}
    </Nav>
  )
}

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
  position: relative;
  height: 100%;
  width: 60px;
  min-width: 60px;
  padding: 60px 5px;
  font-family: apercu mono, sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15rem;

  will-change: width;
  cursor: pointer;
  transform: matrix(1, 0, 0, 1, 0, 0);
  background-color: ${(props) => props.color};
  transition: all 0.5s ease;
  text-decoration: none;
  color: #212121;

  &.active {
    width: 100%;
  }

  span {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span.nav-icon {
    font-size: 2rem;

    &:hover {
      transition: all 600ms cubic-bezier(0.99, 0, 0.57, 0.94);
      transform: rotate(360deg);
    }
  }

  span.nav-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: capitalize;
  }
`

const Tabs = [
  {
    label: 'home',
    color: '#FFC93C',
    path: '',
    icon: <BiHomeSmile />,
  },
  {
    label: 'about',
    color: '#DCFCE7',
    path: 'about',
    icon: <SiAboutdotme />,
  },
  {
    label: 'projects',
    color: '#EF4444',
    path: 'projects',
    icon: <BiCollection />,
  },
  {
    label: 'contact',
    color: '#0284C7',
    path: 'contact',
    icon: <GrContactInfo />,
  },
]

export default Navigation
