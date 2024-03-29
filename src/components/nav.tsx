import { AppTheme } from "@/styles/theme";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiCollection, BiHomeSmile } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import styled from "styled-components";

export const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <Nav className='navigation'>
      {Tabs.map((tab) => (
        <NavigationLink
          href={tab.path}
          key={tab.label}
          color={tab.color}
          className={clsx([
            `navigation-link__${tab.label}`,
            { active: router.pathname === tab.path },
          ])}
        >
          <span className='nav-icon'>{tab.icon}</span>
          <span className='nav-text'>{tab.label}</span>
        </NavigationLink>
      ))}
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0;
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const NavigationLink = styled(Link)<{ color: string }>`
  position: relative;
  height: 100%;
  width: 60px;
  min-width: 60px;
  padding: 60px 5px;

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

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    position: relative;
    height: 45px;
    width: 100%;
    min-height: 45px;
    padding: 15px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15rem;

    &.active {
      height: 100%;
    }
  }

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

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }

  span.nav-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: capitalize;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      text-transform: capitalize;
    }
  }
`;

const Tabs = [
  {
    label: "home",
    color: AppTheme.colors["bg-home"],
    path: "/",
    icon: <BiHomeSmile />,
  },
  {
    label: "about",
    color: AppTheme.colors["bg-about"],
    path: "/about",
    icon: <SiAboutdotme />,
  },
  {
    label: "projects",
    color: AppTheme.colors["bg-projects"],
    path: "/projects",
    icon: <BiCollection />,
  },
  {
    label: "contact",
    color: AppTheme.colors["bg-contact"],
    path: "/contact",
    icon: <GrContactInfo />,
  },
];

export default Navigation;
