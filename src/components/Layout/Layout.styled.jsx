import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Box from 'components/Box/Box';

export const Container = styled(Box)`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bg};
  width: 320px;
  margin: 0 auto;
  border: ${p => p.theme.borders.secondary} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.max};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Nav = styled.nav`
  border-bottom: ${p => p.theme.borders.primary};
  border-bottom-color: ${p => p.theme.colors.border};
  padding-bottom: ${p => p.theme.space[2]}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;

  color: ${p => p.theme.colors.textP};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 250ms linear;

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }

  &:hover:not(.active) {
    color: ${p => p.theme.colors.hover};
  }

  &.active {
    border-bottom: ${p => p.theme.borders.secondary};
  }
`;
