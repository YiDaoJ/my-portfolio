import React, { ReactNode } from "react";
import styled from "styled-components";

interface TextLinkStyleProps {
  color?: string;
  underlineColor?: string;
  size?: string;
}

interface TextLinkProps extends TextLinkStyleProps {
  children: string | ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  target = "_blank",
  rel,
  className,
  color,
  underlineColor,
  size,
}) => (
  <StyledTextLink
    href={href}
    target={target}
    rel={rel}
    color={color}
    underlineColor={underlineColor}
    size={size}
    className={className}
  >
    {children}
  </StyledTextLink>
);

export const StyledTextLink = styled.a<TextLinkStyleProps>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  margin: 0 6px;
  padding-bottom: 4px;
  color: ${(props) => props.color || props.theme.colors.font};
  font-size: ${(props) => props.size};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.3s;
    background-color: ${(props) =>
      props.underlineColor || props.color || props.theme.colors.font};
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
